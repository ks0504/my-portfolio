import utilStyles from '../../styles/utils.module.scss'

export const TopSection = () => {
    return (
        <section className={utilStyles.headingMd}>
            <h1 className="text-3xl font-bold underline bg-yellow-500">Portfolio TOP</h1>
            <p>
                (This is a sample website - you’ll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
      </section>
    )
}