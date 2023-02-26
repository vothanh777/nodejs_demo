const sortMiddleware = (req, res, next) => {
  res.locals._sort = {
    enabled: false,
    type: "default",
    column: "name",
  };

  if (req.query.hasOwnProperty("_sort")) {
    res.locals._sort = {
      ...res.locals._sort,
      enabled: true,
      type: req.query.type,
      column: req.query.column,
    };
  }

  next();
};

module.exports = sortMiddleware;
