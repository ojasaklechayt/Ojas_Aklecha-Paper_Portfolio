import { LinkedInEmbed } from 'react-social-media-embed';

const Linkedin = () => {
    const profileUrl = `https://www.linkedin.com/posts/mitra-vinda-m_defythenorm-ugcPost-7158515285979783168-7pzk?utm_source=share&utm_medium=member_desktop`;
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='sk-linkedin-event' data-embed-id='25374381'></div><script src='https://widgets.sociablekit.com/linkedin-events/widget.js' async defer></script>
        </div>
    )
}

export default Linkedin;
