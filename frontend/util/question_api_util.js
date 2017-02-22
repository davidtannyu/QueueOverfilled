export const fetchQuestions = (search) => {
  return $.ajax({
    method: "GET",
    url: "api/questions",
    data: { search }
  });
};

export const fetchQuestion = (id, voterId) => {
  return $.ajax({
    method: "GET",
    url: `api/questions/${id}`,
    data: { voterId }
  });
};

export const createQuestion = (question) => {
  return $.ajax({
    method: "POST",
    url: 'api/questions',
    data: { question }
  });
};

export const updateQuestion = (question) => {
  return $.ajax({
    method: "PATCH",
    url: `api/questions/${question.id}`,
    data: { question }
  });
};

export const deleteQuestion = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/questions/${id}`
  });
};
