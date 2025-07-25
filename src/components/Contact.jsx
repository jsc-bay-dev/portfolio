import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const Contact = () => {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
        <li>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" style={{ width: 32, height: 32 }} />
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" style={{ width: 32, height: 32 }} />
            </a>
        </li>
        <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" style={{ width: 32, height: 32 }} />
            </a>
        </li>
    </ul>
  )
}

export default Contact