function ListStruk(props) {
  return (
    <tbody>
      <tr>
        <td>{props.data}</td>
        <td>{props.name}</td>
        <td>
          <button>-</button>
        </td>
        <td>5</td>
        <td>
          <button>+</button>
        </td>
        <td>{props.nama}</td>
      </tr>
      <tr>
        <td>nasi </td>
        <td>5.000</td>
        <td>
          <button>-</button>
        </td>
        <td>5</td>
        <td>
          <button>+</button>
        </td>
        <td>25.000</td>
      </tr>
      <tr>
        <td>kangkung</td>
        <td>25.000</td>
        <td>
          <button>-</button>
        </td>
        <td>3</td>
        <td>
          <button>+</button>
        </td>
        <td>75.000</td>
      </tr>
      <tr>
        <td>tempe</td>
        <td>4.000</td>
        <td>
          <button>-</button>
        </td>
        <td>5</td>
        <td>
          <button>+</button>
        </td>
        <td>20.000</td>
      </tr>
      <tr>
        <td>tahu</td>
        <td>4.0000</td>
        <td>
          <button>-</button>
        </td>
        <td>5</td>
        <td>
          <button>+</button>
        </td>
        <td>20.000</td>
      </tr>
      <tr>
        <td>Es teh Manis</td>
        <td>5.000</td>
        <td>
          <button>-</button>
        </td>
        <td>5</td>
        <td>
          <button>+</button>
        </td>
        <td>25.000</td>
      </tr>
      <tr>
        <td>
          <strong>Total</strong>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>325.000</td>
      </tr>
      <tr>
        <td>
          <strong>Bayar</strong>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>500.000</td>
      </tr>
      <tr>
        <td>
          <strong>Kembalian</strong>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>175.000</td>
      </tr>
    </tbody>
  );
}

export default ListStruk;
