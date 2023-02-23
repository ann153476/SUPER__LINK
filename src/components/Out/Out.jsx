import inn from '../Links';

const imgLinksArr = [inn];

console.log('jbj');
const Out = (
  { urls } //index
) => (
  <>
    <div>
      <h1>OOOOUT</h1>
      <div>
        {urls.map(({ id, name, url, img }) => (
          <div key={id}>
            <a href={url}>{name}</a>
            {/* <img src={img} width="100" /> */}
          </div>
        ))}
      </div>
    </div>
    <img
      src="https://cdn.shortpixel.ai/spai/w_886+q_lossy+ret_img+to_webp/https://cdn-upmostlymulti.pressidium.com/wp-content/uploads/Screenshot-2022-03-15-at-15.52.10.png"
      width="100"
    />
  </>
);

export default Out;
