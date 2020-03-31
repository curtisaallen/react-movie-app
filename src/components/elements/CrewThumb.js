import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
const NoImage = 'https://dummyimage.com/224x336/000/ffffff&text=NO+IMAGE';

const CrewThumb = ({crew}) => (
<div className="grid-element-actor">
    <div className="grid-item-actor">
        <img  src={crew.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${crew.profile_path}` : NoImage} alt={crew.name} />
        <span className="actor-name">{crew.name}</span>
        <span className="actor-character">{crew.job}</span>
    </div>
</div>
)

export default CrewThumb;