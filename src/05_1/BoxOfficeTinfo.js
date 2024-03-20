export default function BoxOfficeTinfo({stInfo}) {
  return (
    <tfoot>
      <tr>
        <td colSpan="6" className="bg-amber-200 text-center">
          <span>{stInfo}</span>
        </td>
      </tr>
    </tfoot>
  );
}
