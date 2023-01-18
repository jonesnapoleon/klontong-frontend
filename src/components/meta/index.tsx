import Head from 'next/head'

type IHeadTagProps = {
  title: string
  description: string
}

const HeadTag = ({ title, description }: IHeadTagProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

export default HeadTag
