FOR /f "tokens=*" %i IN ('docker images -q -f "dangling=true"') DO docker rmi %i
