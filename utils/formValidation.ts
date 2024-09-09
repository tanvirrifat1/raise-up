type JsonObject = {
  [key: string]: any;
};

type InvalidFields = {
  [key: string]: string;
};
export function validateJSON(jsonObj: JsonObject): true | InvalidFields {
  let invalidFields: InvalidFields = {};

  for (let key in jsonObj) {
    if (!jsonObj[key] && jsonObj[key] !== 0) {
      let invalidType: string;
      switch (typeof jsonObj[key]) {
        case "undefined":
          invalidType = "undefined";
          break;
        case "object":
          invalidType = "null";
          break;
        default:
          invalidType = "field is empty";
          break;
      }
      invalidFields[key] = invalidType;
    }
  }

  return Object.keys(invalidFields).length === 0 ? true : invalidFields;
}
