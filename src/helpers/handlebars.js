const Handlebars = require("handlebars");

module.exports = {
  sum: (a, b) => a + b,
  sort: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default";

    const icons = {
      default: "fa fa-sort",
      asc: "fa fa-sort-up",
      desc: "fa fa-sort-down",
    };

    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };

    const icon = icons[sortType];
    const type = types[sortType];

    const address = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );

    const output = `<a href="${address}">
            <i class="${icon}"></i>
          </a>`;

    return new Handlebars.SafeString(output);
  },
};
