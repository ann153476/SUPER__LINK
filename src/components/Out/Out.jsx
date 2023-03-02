import links from '../Links';
import { nanoid } from 'nanoid';
import s from './out.module.css';

const Out = () => (
  <div className={s.wrap}>
    {links.map(({ name, url, img, note }) => (
      <div className={s.box} key={nanoid()}>
        <img src={img} alt="no img" />
        <div className={s.f}>
          <div className={s.circle}>
            !
            <div className={s.overlay}>
              <p>{note}</p>
            </div>
          </div>
          <a href={url}>{name}</a>
        </div>
      </div>
    ))}
  </div>
);

export default Out;
