function status(request, response) {
  response.status(200).json({ chave: "successo total" });
}

export default status;
