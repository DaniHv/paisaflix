import type { FC } from 'react';
import { MapPin, Mail, Phone } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';

import { Section, Grid, Logo, Navigation, Social } from './styles';
import { Container } from 'components/UI';
import NewsletterForm from 'components/Layout/NewsletterForm';

const Footer: FC = () => {
  const navigation = [
    {
      title: 'Product',
      childs: [
        {
          title: 'Movies',
          url: '/',
        },
        {
          title: 'TV Show',
          url: '/',
        },
        {
          title: 'Videos',
          url: '/',
        },
      ],
    },
    {
      title: 'Media Group',
      childs: [
        {
          title: 'Nice Studio',
          url: '/',
        },
        {
          title: 'Nice News',
          url: '/',
        },
        {
          title: 'Nice TV',
          url: '/',
        },
      ],
    },
    {
      title: 'Sitemap',
      childs: [
        {
          title: 'About',
          url: '/',
        },
        {
          title: 'Carreers',
          url: '/',
        },
        {
          title: 'Press',
          url: '/',
        },
      ],
    },
  ];

  return (
    <Section>
      <Container>
        <Grid>
          <div>
            <Link href="/" passHref>
              <Logo>
                <Image
                  src="/assets/logo.svg"
                  alt="Paisaflix"
                  width="125px"
                  height="35px"
                />
              </Logo>
            </Link>

            <NewsletterForm />
          </div>
          <div>
            <Navigation>
              {navigation.map(({ title, childs }, i) => (
                <div key={i}>
                  <h4>{title}</h4>

                  <ul>
                    {childs.map(({ url, title }, i) => (
                      <li key={i}>
                        <Link href={url}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Navigation>
          </div>
        </Grid>

        <Social>
          <a href="#">
            <MapPin /> 8819 Enrique Martinez, Bs As., 90280
          </a>
          <a href="mailto:hola@paisanos.io">
            <Mail /> hola@paisanos.io
          </a>
          <a href="tel:+271 386-647-3637">
            <Phone /> +271 386-647-3637
          </a>
        </Social>
      </Container>
    </Section>
  );
};

export default Footer;
