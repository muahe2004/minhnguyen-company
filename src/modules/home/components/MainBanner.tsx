import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';
import './styles/mainBanner.css';

export default function MainBanner() {
    const { t } = useTranslation()

    return (
        <section>
            <div className="home-hero" id="services">
                <img className="hero-hero__banner" src="/images/banner1.png" alt="" />
                <div className="home-content">
                    <div className="home-content__inner">
                        <h1 className='home-content__title'>
                            {t('home.title')}
                        </h1>

                        <p className='home-content__desc'>
                            {t('home.description')}
                        </p>

                        <Button className='secondary-button'>{t('home.contact-button')}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
};
