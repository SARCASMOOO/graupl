/**
 * Check to see if the provided elements have a specific contructor.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * This is essentially just a wrapper function around checking instanceof with
 * more descriptive error message to help debugging.
 *
 * Will return `{ status: true }` if the check is successful.
 *
 * @param  {object}                  contructor - The constructor to check for.
 * @param  {object}                  elements   - The element(s) to check.
 * @return {Object<boolean, string>}            - The result of the check.
 */
export function isValidInstance(contructor, elements) {
  try {
    if (typeof elements !== "object") {
      const elementsType = typeof elements;

      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${elementsType}" given.`
      );
    }

    for (const key in elements) {
      if (!(elements[key] instanceof contructor)) {
        const elementType = typeof elements[key];
        throw new TypeError(
          `${key} must be an instance of ${contructor.name}. "${elementType}" given.`
        );
      }
    }

    return {
      status: true,
      error: null,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
}

/**
 * Check to see if the provided values are of a specific type.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * This is essentially just a wrapper function around checking typeof with
 * more descriptive error message to help debugging.
 *
 * Will return `{ status: true }` if the check is successful.
 *
 * @param  {string}                  type   - The type to check for.
 * @param  {object}                  values - The value(s) to check.
 * @return {Object<boolean, string>}        - The result of the check.
 */
export function isValidType(type, values) {
  try {
    if (typeof values !== "object") {
      const valuesType = typeof values;

      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${valuesType}" given.`
      );
    }

    for (const key in values) {
      const valueType = typeof values[key];

      if (valueType !== type) {
        throw new TypeError(`${key} must be a ${type}. "${valueType}" given.`);
      }
    }

    return {
      status: true,
      error: null,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
}

/**
 * Checks to see if the provided values are valid query selectors.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return `{ status: true }` if the check is successful.
 *
 * @param  {Object<string>}          values - The value(s) to check.
 * @return {Object<boolean, string>}        - The result of the check.
 */
export function isQuerySelector(values) {
  try {
    if (typeof values !== "object") {
      const type = typeof values;

      throw new TypeError(
        `Values given to isQuerySelector() must be inside of an object. "${type}" given.`
      );
    }

    for (const key in values) {
      try {
        if (values[key] === null) {
          throw new Error();
        }

        document.querySelector(values[key]);
      } catch {
        throw new TypeError(
          `${key} must be a valid query selector. "${values[key]}" given.`
        );
      }
    }

    return {
      status: true,
      error: null,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
}

/**
 * Checks to see if the provided value is either a string or an array of strings.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return `{ status: true }` if the check is successful.
 *
 * @param  {Object<string, string[]>} values - The value(s) to check.
 * @return {Object<boolean, string>}         - The result of the check.
 */
export function isValidClassList(values) {
  try {
    if (typeof values !== "object" || Array.isArray(values)) {
      const type = typeof values;

      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${type}" given.`
      );
    }

    for (const key in values) {
      const type = typeof values[key];

      if (type !== "string") {
        if (Array.isArray(values[key])) {
          values[key].forEach((value) => {
            if (typeof value !== "string") {
              throw new TypeError(
                `${key} must be a string or an array of strings. An array containing non-strings given.`
              );
            }
          });
        } else {
          throw new TypeError(
            `${key} must be a string or an array of strings. "${type}" given.`
          );
        }
      } else {
        const obj = {};
        obj[key] = values[key];

        isQuerySelector(obj);
      }
    }

    return {
      status: true,
      error: null,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
}

/**
 * Checks to see if the provided elements are using a specific tag.
 *
 * The elements must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return `true` if the check is successful.
 *
 * @param  {string}               tagName - The name of the tag.
 * @param  {Object<HTMLElement>} elements - The element(s) to check.
 * @return {boolean}                      - The result of the check.
 */
export function isTag(tagName, elements) {
  if (
    isValidType("string", { tagName }).status &&
    isValidInstance(HTMLElement, elements).status
  ) {
    const tag = tagName.toLowerCase();
    let check = true;

    for (const key in elements) {
      if (elements[key].tagName.toLowerCase() !== tag) check = false;
    }

    return check;
  } else {
    return false;
  }
}
