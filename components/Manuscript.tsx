// 원고지 칸에 한 글자씩 써 내려가는 첫 화면 문장.
// 첫 줄은 원고지 규칙대로 한 칸 들여 쓴다.

const lines = ["학생의 생각을", "대신하지 않는", "도구를 만듭니다."];

export default function Manuscript() {
  let order = 0;
  return (
    <div className="sheet" role="img" aria-label="학생의 생각을 대신하지 않는 도구를 만듭니다.">
      {lines.map((line, row) => {
        const chars = [...(row === 0 ? " " + line : line)];
        return (
          <div className="sheet-row" key={row} aria-hidden="true">
            {chars.map((ch, i) => {
              const delay = ch === " " ? undefined : order++;
              return (
                <span className="cell" key={i} style={delay === undefined ? undefined : ({ "--i": delay } as React.CSSProperties)}>
                  {ch === " " ? "" : ch}
                </span>
              );
            })}
          </div>
        );
      })}
      <div className="sheet-row" aria-hidden="true" />
    </div>
  );
}
