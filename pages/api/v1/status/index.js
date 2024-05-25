function status(request, response) {
  response
    .status(200)
    .json({ chave: "Testando endpoint e acentos e ações doidonas" });
}

export default status;
