import React from 'react'

import FaceIcon from '../../assets/img/face.png'
import IdeaDetail from '../organisms/IdeaDetail'

const IdeaDetailData = {
  title: '魔法の絨毯を作りたい',
  name: '山田太郎',
  icon: FaceIcon,
  description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
  tags: [
    { label: 'Web', fontSize: '12px', margin: '0 5px 10px 0', padding: '7px 10px' },
    { label: 'ハードウェア', fontSize: '12px', margin: '0 5px 10px 0', padding: '7px 10px' },
  ],
}

const IdeaDetailPage: React.FC = () => {
  return (
    <div>
      <IdeaDetail
        title={IdeaDetailData.title}
        name={IdeaDetailData.name}
        icon={IdeaDetailData.icon}
        description={IdeaDetailData.description}
        tags={IdeaDetailData.tags}
      />
    </div>
)
}

export default IdeaDetailPage
