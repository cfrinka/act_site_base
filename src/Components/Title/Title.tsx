import "./Title.css";

type Props = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: Props) => {
  return (
    <div className="title">
      <p>{title}</p>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Title;
