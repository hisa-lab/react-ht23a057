type Props = { name: string; times?: number };

// const Greet: React.FC<Props> = (props) => {
//   const { name, times = 1 } = props;

  const Greet: React.FC<Props> = ({ name, times = 1 }) => {

  return (
    <>
      {/* {[...Array(times)].map(() => (
        <p>Hello, {name}!</p> */}
      {[...Array(times).keys()].map((i) => ( //keys()の箇所、()追加
        <p key={i}>Hello, {name}!</p>
      ))}
    </>
  );
};

export default Greet;