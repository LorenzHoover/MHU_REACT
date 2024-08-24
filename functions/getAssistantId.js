// functions/getAssistantId.js
import classesData from '../src/classes.json';

export const getAssistantInfo = (classCode) => {
  const classItem = classesData.classes.find(cls => cls["Class Code"] === classCode);
  if (classItem) {
    return {
      assistantId: classItem.CustomGptId,
      vectorStorageId: classItem.VectorStorageId
    };
  }
  return null;
};
