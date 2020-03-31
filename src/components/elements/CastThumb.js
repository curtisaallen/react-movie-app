import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
const NoImage = 'https://dummyimage.com/224x336/000/ffffff&text=NO+IMAGE';

const CastThumb = ({cast}) => (
<div className="grid-element-actor">
    <div className="grid-item-actor">
        <img  src={cast.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${cast.profile_path}` : NoImage} alt={cast.name} />
        <span className="actor-name">{cast.name}</span>
        <span className="actor-character">{cast.character}</span>
    </div>
</div>
)

export default CastThumb;