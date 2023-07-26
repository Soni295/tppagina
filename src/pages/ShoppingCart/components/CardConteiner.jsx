import { Card } from "./Card";

export function CardConteiner({ elements }) {
  if (!elements) return <></>;

  return (
    <div className="Card-Conteiner">
      {elements.map((element) => (
        <Card key={element.id} {...element} />
      ))}
    </div>
  );
}
