import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(153, 153, 102) 0.5rem 0px 0px, rgb(153, 153, 102) -0.5rem 0px 0px',
            backgroundColor: 'rgb(153, 153, 102)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(153, 153, 0) 0.5rem 0px 0px, rgb(153, 153, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(153, 153, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
	            <iframe src="https://www.youtube.com/embed/xYviuIdd8Oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>{description}</p>
                    <form 
		      action="https://formspree.io/f/mayayjvn"
	              method="POST"
	              >
                      <p> 
                        <label>Your Name: <input type="text" name="name" /></label>   
                      </p>
                      <p> 
                        <label>Your Email: <input type="email" name="email" /></label>
                      </p>
                      <p>What are you collecting</p>
			<div name="checkbox-collection">
                          <div><label
                              >NBA Top Shots    
                              <input type="checkbox" id="TS" name="TS" />
                          </label></div>
                          <div><label
                              >CryptoKitties
                              <input type="checkbox" id="CK" name="CK" />
                          </label></div>
                          <div><label
                              >CryptoPunks
                              <input type="checkbox" id="CP" name="CP" />
                          </label></div>
                          <div><label
                              >Fine Art NFTs
                              <input type="checkbox" id="FA" name="FA" />
                          </label></div>
			  <div><label
                              >Other
                              <input type="checkbox" id="NA" name="NA" />
                          </label></div>
                      </div>
                      <p> 
                        <button type="submit">Send</button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
      }
    }
  }
`
