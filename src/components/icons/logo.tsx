import Image from 'next/image';
import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <Image
    src="https://i.imgur.com/8Qp254s.png"
    alt="Logo de Peñamellera Deportes"
    width={props.width ? Number(props.width) : 48}
    height={props.height ? Number(props.height) : 48}
  />
);

export default Logo;
