import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionTable() {

 useEffect(() => {
     api.get('transactions')
      .then(response => console.log(response.data));
 }, []);



  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
        
          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td>R$50.000</td>
            <td>Desenvolvimento</td>
            <td>27/09/2023</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  );
}
