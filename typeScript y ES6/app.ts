
function activar (quien:string, objeto:string = "algo",momento?:string){
  let texto:string
  if (momento){
    texto = `${quien} activo ${objeto} en el ${momento}`;
  }
  else{
    texto = `${quien} activo ${objeto}`;
  }
  console.log(texto)
}

activar("perro");
