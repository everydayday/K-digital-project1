export default function BoxOfficeThead() {
  return (
    <thead>
      <tr className=" h-16  border bg-amber-200 ">
        <th className="w-10">순위</th>
        <th>영화명</th>
        <th>매출액</th>
        <th>관객수</th>
        <th className="w-30">증감율</th>
        <th className="w-30">증감여부</th>
      </tr>
    </thead>
  );
}
