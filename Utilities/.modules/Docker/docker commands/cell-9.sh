docker images -q | %{docker rmi -f $_}