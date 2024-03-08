const queryBuilder = {

  getFindOptions({ query = {} }) {

    const defaultLimit = 5;
    const {
      fields = false,
      sort = false,
      page = 1,
      limit = defaultLimit,
      filter = {}, // Add filter object as default argument
      ...rest // Capture any additional query parameters
    } = query;

    const mongooseQuery = this.extractQuery(filter);
    const mongooseProjection = this.extractSimpleProjection(fields);
    const mongooseSort = this.extractSort(sort);
    const mongooseLimit = this.extractLimit(limit);
    const mongooseSkip = this.extractSkip(page, limit);

    const findObjectParams = {
      filter: mongooseQuery,
      projection: mongooseProjection,
      options: {
        ...mongooseSort,
        ...mongooseLimit,
        ...mongooseSkip,
      },
    };

    // Log findObjectParams for debugging (optional)
    console.log(findObjectParams);

    return findObjectParams;
  },

  extractQuery(queryRest) {
    // TODO: Implement type validation and field existence checks
    return { ...queryRest };
  },

  extractSort(sort) {
    const sortOptions = {};
    if (sort) {
      const sortParts = sort.split(','); // Allow sorting on multiple fields
      sortParts.forEach((sortParam) => {
        if (sortParam.indexOf('-') >= 0) {
          const cleanParam = sortParam.slice(1, sortParam.length); // Descending sort
          sortOptions[cleanParam] = -1;
        } else {
          sortOptions[sortParam] = 1; // Ascending sort
        }
      });
    }
    return { sort: sortOptions };
  },

  extractLimit(limit) {
    const positiveLimit = limit > 0 ? limit : defaultLimit; // Handle invalid limits
    return { limit: positiveLimit };
  },

  extractSkip(page, limit) {
    const offset = page > 1 ? page - 1 : 0; // Handle negative or zero page numbers
    const skip = Math.max(0, offset * limit); // Ensure skip is always non-negative
    return { skip };
  },

  extractSimpleProjection(fields) {
    // TODO: Handle exclude/include logic for projections
    const projOptions = {};
    if (fields) {
      const fieldsList = fields.split(',');
      fieldsList.forEach((field) => {
        if (field.indexOf('-') >= 0) {
          const cleanParam = field.slice(1, field.length); // Exclude field
          projOptions[cleanParam] = 0;
        } else {
          // Currently, including fields doesn't work (TODO: Implement inclusion logic)
          // projOptions[field] = 1;
        }
      });
    }
    return projOptions;
  },
};

export default queryBuilder;