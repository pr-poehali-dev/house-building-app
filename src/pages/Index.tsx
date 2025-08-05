import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={32} className="text-construction" />
            <h1 className="text-2xl font-montserrat font-bold text-navy">СтройДом</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-construction transition-colors font-open-sans">Услуги</a>
            <a href="#projects" className="text-gray-600 hover:text-construction transition-colors font-open-sans">Проекты</a>
            <a href="#about" className="text-gray-600 hover:text-construction transition-colors font-open-sans">О нас</a>
            <a href="#contact" className="text-gray-600 hover:text-construction transition-colors font-open-sans">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy via-navy/90 to-construction/20 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/img/d2dbde24-2977-4e66-8854-5398a9db3ff6.jpg)' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 animate-fade-in">
              <span className="text-construction">Строим</span> дома вашей мечты
            </h1>
            <p className="text-xl font-open-sans mb-8 text-gray-200 animate-fade-in">
              Профессиональное строительство частных домов и коттеджей с современными технологиями и качественными материалами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button 
                className="bg-construction hover:bg-construction/90 text-white px-8 py-3 text-lg font-semibold"
                size="lg"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg"
                size="lg"
              >
                Смотреть проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-navy mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 font-open-sans">Полный цикл строительства от проекта до ключей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Home" size={48} className="text-construction mb-4" />
                <CardTitle className="text-navy font-montserrat">Частные дома</CardTitle>
                <CardDescription className="font-open-sans">
                  Строительство индивидуальных жилых домов по готовым и индивидуальным проектам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-open-sans">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />От 100 до 500 м²</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />Любые материалы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />Современные технологии</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Building2" size={48} className="text-construction mb-4" />
                <CardTitle className="text-navy font-montserrat">Коттеджи</CardTitle>
                <CardDescription className="font-open-sans">
                  Элитные коттеджи с эксклюзивным дизайном и премиальными материалами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-open-sans">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />Премиум класс</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />Индивидуальный дизайн</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />Ландшафтный дизайн</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Wrench" size={48} className="text-construction mb-4" />
                <CardTitle className="text-navy font-montserrat">Реконструкция</CardTitle>
                <CardDescription className="font-open-sans">
                  Модернизация и реконструкция существующих домов и коттеджей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-open-sans">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />Расширение площади</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />Модернизация систем</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-construction mr-2" />Обновление фасада</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-navy mb-4">Наши проекты</h2>
            <p className="text-xl text-gray-600 font-open-sans">Примеры реализованных домов и коттеджей</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/img/d364ee56-8acf-44eb-97e9-43cccbe2e9e9.jpg" 
                alt="Современный дом" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-montserrat font-bold mb-2">Современный дом</h3>
                  <p className="font-open-sans">250 м² • 3 этажа • Премиум</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/img/5440f1a3-79b0-4746-b9f2-70c7c392b036.jpg" 
                alt="Семейный коттедж" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-montserrat font-bold mb-2">Семейный коттедж</h3>
                  <p className="font-open-sans">180 м² • 2 этажа • Комфорт</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-construction text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl font-open-sans opacity-90">15 лет опыта в строительстве</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="Shield" size={64} className="mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-montserrat font-bold mb-4">Гарантия качества</h3>
              <p className="font-open-sans opacity-90">5 лет гарантии на все виды работ и используемые материалы</p>
            </div>
            
            <div className="text-center">
              <Icon name="Clock" size={64} className="mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-montserrat font-bold mb-4">Точные сроки</h3>
              <p className="font-open-sans opacity-90">Соблюдаем договорные сроки строительства без задержек</p>
            </div>
            
            <div className="text-center">
              <Icon name="Award" size={64} className="mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-montserrat font-bold mb-4">Профессионализм</h3>
              <p className="font-open-sans opacity-90">Команда сертифицированных специалистов высокой квалификации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-navy mb-4">Связаться с нами</h2>
            <p className="text-xl text-gray-600 font-open-sans">Получите бесплатную консультацию уже сегодня</p>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Phone" size={24} className="text-construction" />
                <div>
                  <p className="font-open-sans font-semibold text-navy">+7 (495) 123-45-67</p>
                  <p className="text-gray-600 font-open-sans text-sm">Звоните ежедневно 9:00-21:00</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Mail" size={24} className="text-construction" />
                <div>
                  <p className="font-open-sans font-semibold text-navy">info@stroydom.ru</p>
                  <p className="text-gray-600 font-open-sans text-sm">Ответим в течение часа</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-construction hover:bg-construction/90 text-white px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="lg"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-navy text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Home" size={24} className="text-construction" />
              <h3 className="text-xl font-montserrat font-bold">СтройДом</h3>
            </div>
            <p className="font-open-sans text-gray-300 mb-4">
              Строительная компания полного цикла
            </p>
            <p className="font-open-sans text-gray-400 text-sm">
              © 2024 СтройДом. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;