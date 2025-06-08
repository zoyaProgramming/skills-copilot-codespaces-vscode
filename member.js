function skillsMember()  {
  return {
    "name": "skillsMember",
    "description": "A member of the skills group.",
    "properties": {
      "id": {
        "type": "string",
        "description": "Unique identifier for the member."
      },
      "name": {
        "type": "string",
        "description": "Name of the member."
      },
      "role": {
        "type": "string",
        "description": "Role of the member in the skills group."
      },
      "expertiseLevel": {
        "type": "string",
        "enum": ["beginner", "intermediate", "expert"],
        "description": "Expertise level of the member."
      }
    }
  };
}

module.exports = { skillsMember };




