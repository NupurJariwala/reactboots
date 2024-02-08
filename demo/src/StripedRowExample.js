import Table from 'react-bootstrap/Table';

function StripedRowExample()
{
  const data = [
    { id: 101, name: "Pankaj", city: "surat" },
    { id: 102, name: "Rinku", city: "Vesu" },
    { id: 103, name: "Alok", city: "Varachha" },
    { id: 104, name: "Keyur", city: "Dindoli" },
]

      return(
      
        <Table   striped bordered hover  style={{width:"50%" , margin:"auto"}}>
      <thead >
        <tr>
          <th>ID</th>
          <th> Name</th>
          <th>city</th>
        </tr>
      </thead>
      {
        data.map((callback) =>
                                
                                <tbody>
                                    <tr>
                                        <td>{callback.id}</td>
                                        <td>{callback.name}</td>
                                        <td>{callback.city}</td>
                                    </tr>
                                </tbody>
                        )
      }
    </Table>
       
      );

}
export default StripedRowExample; 