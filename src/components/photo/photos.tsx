import Photo from './photo';

interface PhotosProps {
  data: Photo[];
}

const Photos = ({ data }: PhotosProps) => {
  return (
    <div className="columns-5 gap-5">
      {data.map(item => {
        return <Photo key={item.id} data={item} />
      })}
    </div>
  )
}

export default Photos