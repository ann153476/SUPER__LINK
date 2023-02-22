const Out = ({ urls }) => (
  <>
    <div>
      <h1>OOOOUT</h1>
      <div>
        {urls.map(({ id, name, url, img }) => (
          <div key={id}>
            <p>{name}</p>
            <a href={url}></a>
            <img src={img} width="100" />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Out;
