// functions/getAssistantId.js
import classesData from '../src/classes.json';

export const getAssistantId = (classCode) => {
  const classItem = classesData.classes.find(cls => cls["Class Code"] === classCode);
  return classItem ? classItem.CustomGptId : null;
};
