import Image from 'next/image'

import styles from './photo.module.css'

interface PhotoProps {
  data: Photo;
}

export default function Photo({ data }: PhotoProps) {
  return (
    <div className={`shadow-lg rounded-lg ${styles.photo}`}>
      <Image
        src={data.urls.thumb}
        alt={data.description}
        width={200}
        height={200}
      />
    </div>
  );
}