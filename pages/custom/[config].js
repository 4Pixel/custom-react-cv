import CustomCV from 'src/custom-cv/custom-cv'

export default function CustomCVPage({ config }) {
  return <CustomCV config={config} />
}

export const getStaticProps = ({ params }) => {
  return {
    props: {
      config: params.config,
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
