import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CloudIcon from '@material-ui/icons/Cloud'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <button type='button' className='btn btn--outline'>
              Resume
            </button>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.salesforce && (
              <a
                href={social.salesforce}
                aria-label='salesforce'
                className='link link--icon'
              >
                <CloudIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
