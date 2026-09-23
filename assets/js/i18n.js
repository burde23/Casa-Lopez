/**
 * Posada Casa Lopez - Engine Internacional de Idiomas (i18n)
 * Soporte Completo: Español (ES), English (EN) y Português do Brasil (PT)
 */
(function () {
    'use strict';

    const TRANSLATIONS = {
        es: {
            // Header & Nav
            nav_home: 'Inicio',
            nav_about: 'La Posada',
            nav_facilities: 'Comodidades',
            nav_rooms: 'Habitaciones',
            nav_wine: 'Enoturismo',
            nav_contact: 'Contacto',
            btn_reserve: 'Reservar',
            hero_subtitle: 'Chacras de Coria • Mendoza',
            hero_discover: 'Descubrir',

            // Booking Bar
            book_checkin: 'Check-in',
            book_checkout: 'Check-out',
            book_guests: 'Huéspedes',
            book_btn: 'Ver Habitaciones',
            opt_1guest: '1 Adulto',
            opt_2guests: '2 Adultos (Pareja / Twins)',
            opt_3guests: '3 Adultos',
            opt_4guests: '4 Personas (Familia)',
            opt_5guests: '+5 Personas (Grupo)',

            // About Section
            about_tag: 'Hospitalidad & Naturaleza',
            about_title: 'Bienvenidos a Casa Lopez',
            about_quote: '"Un lugar para bajar el ritmo y disfrutar lo simple. 🍃 Chacras de Coria, Mendoza"',
            about_lead: 'Posada boutique atendida cálidamente por sus propios dueños, oriundos de Chacras de Coria desde que era un pequeño pueblo rodeado de viñas centenarias.',
            about_p1: 'Nuestro anhelo es que cada huésped viva experiencias memorables en este rincón pintoresco de Mendoza. Un parque arbolado con ejemplares frondosos y el cantar de los pájaros convierten a Casa Lopez en un verdadero oasis de paz, silencio y reconexión.',
            about_p2: 'Disfruta de nuestra piscina al aire libre rodeada de césped verde, desayunos caseros recién horneados todas las mañanas y la cercanía inmediata a las bodegas más emblemáticas de Luján de Cuyo.',
            about_owners_badge_1: 'Atendido por sus',
            about_owners_badge_2: 'Propios Dueños',
            about_feat_loc_title: 'Chacras de Coria',
            about_feat_loc_sub: 'Medrano 2715, Mendoza',
            about_feat_pool_title: 'Piscina & Parque',
            about_feat_pool_sub: 'Solárium y relax natural',

            // Facilities
            fac_tag: 'Confort & Bienestar',
            fac_title: 'Servicios para tu Descanso',
            fac_desc: 'Cada detalle en Casa Lopez está pensado para brindar una estadía relajante y sin preocupaciones.',
            fac_pool_title: 'Piscina al Aire Libre',
            fac_pool_desc: 'Agua cristalina rodeada de parque verde y reposeras para los días soleados de Mendoza.',
            fac_breakfast_title: 'Desayuno Incluido',
            fac_breakfast_desc: 'Deliciosos productos locales, repostería casera, café de calidad y frutas de estación.',
            fac_garden_title: 'Jardín & Terraza',
            fac_garden_desc: 'Árboles añosos, pérgolas sombreadas y el sonido de las aves en un entorno campestre.',
            fac_wifi_title: 'Wi-Fi de Alta Velocidad',
            fac_wifi_desc: 'Cobertura sin cargo en todas las habitaciones y sectores comunes del predio.',
            fac_ac_title: 'Aire Acondicionado',
            fac_ac_desc: 'Equipos split frío/calor individuales en cada suite para confort térmico total.',
            fac_parking_title: 'Parking Privado',
            fac_parking_desc: 'Estacionamiento cerrado dentro de la propiedad para la máxima seguridad de tu vehículo.',
            fac_wine_title: 'Asesoría de Bodegas',
            fac_wine_desc: 'Recomendaciones personalizadas y coordinación de visitas y almuerzos en bodegas.',
            fac_tv_title: 'Smart TV & Streaming',
            fac_tv_desc: 'Pantallas planas en cada habitación con señal satelital y conectividad para tus contenidos.',

            // Rooms Section
            rooms_tag: 'Descanso de Lujo',
            rooms_title: 'Nuestras Habitaciones & Suites',
            rooms_desc: 'Espacios amplios y luminosos con techos altos, maderas nobles y vistas directas a nuestros jardines.',
            room_btn_view: 'Ver Ficha & Reservar',
            room_night_unit: 'por noche',
            room_suite_cipres: 'Suite Ciprés',
            room_suite_cipres_desc: 'Espaciosa suite matrimonial con cama King o 2 camas Twins, baño privado en suite y vista a los jardines arbolados.',
            room_suite_ombu: 'Suite Ombú',
            room_suite_ombu_desc: 'Capacidad para 3 personas con cama matrimonial más cama individual. Techos altos de estilo colonial y máxima serenidad.',
            room_suite_alamo: 'Suite Álamo',
            room_suite_alamo_desc: 'Acogedora suite romántica con cama Queen, ambientación campestre y acceso directo a las galerías del parque.',
            room_damasco: 'Habitación Damasco',
            room_damasco_desc: 'Luminosa habitación doble con cama matrimonial o twin, aire acondicionado split y decoración autóctona de Mendoza.',
            room_datil: 'Habitación Dátil',
            room_datil_desc: 'Confortable habitación para dos personas, ropa de cama de algodón egipcio y vista panorámica a la vegetación nativa.',
            room_suite_sauce: 'Suite Sauce',
            room_suite_sauce_desc: 'Distinguida suite con cama King Size, amplio ventanal hacia la piscina y zona de estar ideal para lecturas tranquilas.',
            room_tamarindo: 'Depto Tamarindo',
            room_tamarindo_desc: 'Departamento independiente con dos dormitorios (hasta 4 huéspedes), living privado y baño completo para familias.',
            room_nogal: 'Habitación Nogal',
            room_nogal_desc: 'Habitación cálida con suelos de madera, luz natural de mañana y todas las comodidades para un descanso reparador.',
            room_suite_ceibo: 'Suite Ceibo',
            room_suite_ceibo_desc: 'Suite premium con salida directa al solárium y piscina. Diseñada para desconectar rodeado de silencio y naturaleza.',

            // Tags
            tag_king_twins: 'King o 2 Twins',
            tag_triple: 'Triple (King + Twin)',
            tag_queen: 'Queen Matrimonial',
            tag_family: 'Familiar 4 Huéspedes',
            tag_breakfast: 'Desayuno buffet',
            tag_wifi: 'Wi-Fi 100 Mbps',
            tag_pool: 'Salida a piscina',
            tag_ac: 'A/C Frío-Calor',
            tag_parking: 'Estacionamiento',

            // Wine Tourism
            wine_tag: 'Tierra del Malbec',
            wine_title: 'Enoturismo & Bodegas de Autor',
            wine_desc: 'Posada Casa Lopez goza de una ubicación privilegiada en Chacras de Coria, corazón de la Primera Zona vitivinícola de Mendoza.',
            wine_item1_title: 'Bodegas a Minutos de Distancia',
            wine_item1_desc: 'Pulenta Estate, Clos de Chacras, Catena Zapata, Nieto Senetiner y Norton a solo minutos de la posada.',
            wine_item2_title: 'Paseos en Bicicleta Entre Viñas',
            wine_item2_desc: 'Alquiler de bicicletas para recorrer las arboledas centenarias y caminos del vino con total libertad.',
            wine_item3_title: 'Ruta Gastronómica de Chacras',
            wine_item3_desc: 'Los mejores restaurantes de autor, bistrós, cafeterías de especialidad y wine bars alrededor de la plaza.',

            // Reviews
            reviews_tag: 'Opiniones Reales',
            reviews_title: 'Experiencias de Nuestros Huéspedes',
            reviews_desc: 'La satisfacción de quienes nos eligen año tras año refleja el amor con el que cuidamos cada rincón.',
            rev1_text: '"La atención de sus dueños es inigualable. El parque es un paraíso de tranquilidad, la piscina impecable y los desayunos con budines caseros son de otro nivel. Cerca de todas las bodegas de Chacras."',
            rev2_text: '"Un lugar mágico para descansar. La habitación comodísima, el silencio de la noche y la calidez humana hacen que quieras volver siempre. Superó todas nuestras expectativas."',
            rev3_text: '"Excelente ubicación para hacer enoturismo. Te asesoran sobre qué bodegas visitar y te reservan almuerzos. El predio cerrado da muchísima seguridad. ¡Volveremos sin dudas!"',

            // Direct Benefits Banner
            ben_title: 'Reservá Directo al Mejor Precio Garantizado',
            ben_desc: 'Sin comisiones de intermediarios. Atención personalizada y beneficios exclusivos al contactarnos directamente.',
            ben_1_title: 'Mejor Tarifa',
            ben_1_desc: 'Sin comisiones de portales',
            ben_2_title: 'Desayuno Casero',
            ben_2_desc: 'Casero todas las mañanas',
            ben_3_title: 'Flexibilidad',
            ben_3_desc: 'Early check-in s/ disp.',
            ben_4_title: 'WhatsApp Directo',
            ben_4_desc: 'Respuesta inmediata',
            ben_btn: 'Contactar por WhatsApp',

            // Footer & Contact
            footer_desc: 'Posada boutique atendida por sus dueños en Chacras de Coria, Mendoza. Tranquilidad campestre, frondosos jardines, piscina y calidez mendocina a pasos de las bodegas más destacadas.',
            footer_contact_title: 'Información de Contacto',
            footer_addr_lbl: 'Dirección:',
            footer_addr_val: 'Medrano 2715, Chacras de Coria, Luján de Cuyo, Mendoza (CP 5505)',
            footer_wa_lbl: 'WhatsApp Directo:',
            footer_tel_lbl: 'Teléfono Administración:',
            footer_ig_lbl: 'Instagram:',
            footer_hours_lbl: 'Horarios:',
            footer_hours_val: 'Check-in 14:00 hs • Check-out 11:00 hs',
            footer_map_title: 'Ubicación en Chacras',
            footer_map_hint: 'Medrano 2715 — Fácil acceso por Ruta Panamericana / Acceso Sur',
            footer_rights: '© 2026 Posada Casa Lopez. Todos los derechos reservados.',
            footer_dev_by: 'Desarrollado por',

            // Habitacion.html
            room_back_link: 'Volver a la Posada',
            room_summary_title: 'Resumen de Tu Estadía',
            room_nights_lbl: 'noches',
            room_total_lbl: 'Total Estimado',
            room_btn_book: 'Reservar & Pagar Online',
            room_tab_desc: 'Descripción & Confort',
            room_tab_amenities: 'Comodidades Incluidas',
            room_tab_location: 'Ubicación & Entorno',
            room_specs_size: 'Espacio Luminoso',
            room_specs_guests: 'Huéspedes',
            room_specs_bed: 'Tipo de Cama',
            room_specs_view: 'Vistas',
            room_specs_view_val: 'Parque & Jardines',

            // Mercado Pago Modal
            mp_modal_title: 'Checkout Seguro — Mercado Pago',
            mp_tab_card: 'Tarjeta Débito / Crédito',
            mp_tab_account: 'Saldo en Cuenta Mercado Pago',
            mp_card_num: 'Número de Tarjeta',
            mp_card_name: 'Nombre del Titular (como figura en la tarjeta)',
            mp_card_exp: 'Vencimiento',
            mp_card_cvv: 'Código (CVV)',
            mp_card_dni: 'DNI / Documento del Titular',
            mp_installments: 'Planes de Cuotas',
            mp_btn_pay: 'Confirmar y Abonar con Mercado Pago',
            mp_processing: 'Procesando pago seguro con Mercado Pago...',
            mp_success_title: '¡Pago Confirmado y Reserva Aprobada!',
            mp_success_sub: 'Tu estadía en Posada Casa Lopez ha sido confirmada con éxito.',
            mp_code_lbl: 'Código de Reserva:',
            mp_holder_lbl: 'Titular:',
            mp_dates_lbl: 'Fechas:',
            mp_total_lbl: 'Monto Abonado:',
            mp_btn_wa: 'Enviar Comprobante por WhatsApp'
        },

        en: {
            // Header & Nav
            nav_home: 'Home',
            nav_about: 'The Inn',
            nav_facilities: 'Amenities',
            nav_rooms: 'Rooms & Suites',
            nav_wine: 'Wine Tourism',
            nav_contact: 'Contact',
            btn_reserve: 'Book Now',
            hero_subtitle: 'Chacras de Coria • Mendoza',
            hero_discover: 'Discover',

            // Booking Bar
            book_checkin: 'Check-in',
            book_checkout: 'Check-out',
            book_guests: 'Guests',
            book_btn: 'View Rooms',
            opt_1guest: '1 Adult',
            opt_2guests: '2 Adults (Couple / Twins)',
            opt_3guests: '3 Adults',
            opt_4guests: '4 Guests (Family)',
            opt_5guests: '+5 Guests (Group)',

            // About Section
            about_tag: 'Hospitality & Nature',
            about_title: 'Welcome to Casa Lopez',
            about_quote: '"A place to slow down and enjoy the simple things. 🍃 Chacras de Coria, Mendoza"',
            about_lead: 'A boutique inn warmly hosted by its owners, lifelong locals of Chacras de Coria since it was a peaceful village surrounded by century-old vineyards.',
            about_p1: 'Our greatest wish is for every guest to experience memorable moments in this picturesque Mendoza haven. A lush wooded park with mature trees and birdsong makes Casa Lopez a true sanctuary of peace, silence, and reconnection.',
            about_p2: 'Unwind by our outdoor swimming pool surrounded by emerald lawns, savor freshly baked homemade breakfast every morning, and enjoy immediate access to the premier wineries of Luján de Cuyo.',
            about_owners_badge_1: 'Hosted by its Own',
            about_owners_badge_2: 'Owners',
            about_feat_loc_title: 'Chacras de Coria',
            about_feat_loc_sub: 'Medrano 2715, Mendoza',
            about_feat_pool_title: 'Pool & Park',
            about_feat_pool_sub: 'Sun deck & natural relaxation',

            // Facilities
            fac_tag: 'Comfort & Wellbeing',
            fac_title: 'Amenities for Your Relaxation',
            fac_desc: 'Every detail at Casa Lopez is curated to provide a peaceful, carefree, and rejuvenating stay.',
            fac_pool_title: 'Outdoor Swimming Pool',
            fac_pool_desc: 'Crystal-clear water bordered by green parkland and loungers for sunny Mendoza days.',
            fac_breakfast_title: 'Breakfast Included',
            fac_breakfast_desc: 'Delicious local delicacies, homemade artisan pastries, premium coffee, and fresh seasonal fruit.',
            fac_garden_title: 'Garden & Veranda',
            fac_garden_desc: 'Mature native trees, shaded pergolas, and tranquil birdsong in a country-chic landscape.',
            fac_wifi_title: 'High-Speed Wi-Fi',
            fac_wifi_desc: 'Complimentary high-speed coverage throughout all guest suites and shared open-air areas.',
            fac_ac_title: 'Air Conditioning',
            fac_ac_desc: 'Individual split heating and air conditioning in every suite for ideal temperature year-round.',
            fac_parking_title: 'Private Gated Parking',
            fac_parking_desc: 'Secure enclosed parking inside the property for your total comfort and peace of mind.',
            fac_wine_title: 'Winery & Tour Advisory',
            fac_wine_desc: 'Tailored recommendations, cellar door tour reservations, and vineyard lunches coordinated for you.',
            fac_tv_title: 'Smart TV & Streaming',
            fac_tv_desc: 'Flat-screen televisions in each room with satellite channels and multimedia streaming access.',

            // Rooms Section
            rooms_tag: 'Luxury Retreat',
            rooms_title: 'Our Rooms & Suites',
            rooms_desc: 'Spacious and luminous sanctuaries featuring high ceilings, noble wood craft, and direct garden vistas.',
            room_btn_view: 'View Details & Book',
            room_night_unit: 'per night',
            room_suite_cipres: 'Ciprés Suite',
            room_suite_cipres_desc: 'Spacious master suite featuring King bed or 2 Twin beds, en-suite bathroom, and garden vistas.',
            room_suite_ombu: 'Ombú Suite',
            room_suite_ombu_desc: 'Sleeps up to 3 guests with matrimonial bed plus single bed. Colonial high ceilings and serene atmosphere.',
            room_suite_alamo: 'Álamo Suite',
            room_suite_alamo_desc: 'Cozy romantic suite with Queen bed, country aesthetic, and direct walkout to the shaded verandas.',
            room_damasco: 'Damasco Room',
            room_damasco_desc: 'Bright double room with King or Twin beds, individual split climate control, and authentic Mendoza decor.',
            room_datil: 'Dátil Room',
            room_datil_desc: 'Comfortable room for two with Egyptian cotton linens, scenic native tree views, and tranquil silence.',
            room_suite_sauce: 'Sauce Suite',
            room_suite_sauce_desc: 'Distinguished suite with King size bed, wide windows facing the pool, and reading lounge area.',
            room_tamarindo: 'Tamarindo Apartment',
            room_tamarindo_desc: 'Self-contained 2-bedroom apartment (up to 4 guests) with private lounge and bathroom for families.',
            room_nogal: 'Nogal Room',
            room_nogal_desc: 'Warm room featuring hardwood floors, morning natural light, and restful ambiance for total relaxation.',
            room_suite_ceibo: 'Ceibo Suite',
            room_suite_ceibo_desc: 'Premium suite with direct walk-out access to the swimming pool and sun deck. Designed for peaceful retreat.',

            // Tags
            tag_king_twins: 'King or 2 Twins',
            tag_triple: 'Triple (King + Twin)',
            tag_queen: 'Queen Bed',
            tag_family: 'Family (4 Guests)',
            tag_breakfast: 'Buffet breakfast',
            tag_wifi: '100 Mbps Wi-Fi',
            tag_pool: 'Pool access',
            tag_ac: 'Heating & A/C',
            tag_parking: 'Free parking',

            // Wine Tourism
            wine_tag: 'Cradle of Malbec',
            wine_title: 'Wine Tourism & Boutique Bodegas',
            wine_desc: 'Posada Casa Lopez boasts an idyllic setting in Chacras de Coria, the historical heart of Mendoza\'s premier wine region.',
            wine_item1_title: 'Wineries Minutes Away',
            wine_item1_desc: 'Pulenta Estate, Clos de Chacras, Catena Zapata, Nieto Senetiner, and Norton just minutes from our door.',
            wine_item2_title: 'Bicycle Rides Among Vineyards',
            wine_item2_desc: 'Bicycle rentals to wander through leafy avenues, irrigation canals, and scenic wine roads at your own pace.',
            wine_item3_title: 'Chacras Culinary Scene',
            wine_item3_desc: 'Exceptional farm-to-table restaurants, wine bistros, specialty coffee shops, and wine bars around the square.',

            // Reviews
            reviews_tag: 'Verified Reviews',
            reviews_title: 'Guest Experiences',
            reviews_desc: 'The genuine appreciation of travelers who choose us year after year reflects the passion we pour into every detail.',
            rev1_text: '"The hospitality of the owners is second to none. The park is a haven of peace, the pool is spotless, and homemade morning pastries are superb. Close to all top wineries in Chacras."',
            rev2_text: '"A magical spot to recharge. Exceptionally comfortable room, soothing nighttime silence, and genuine warmth make you want to stay forever. Far exceeded all expectations."',
            rev3_text: '"Perfect base for exploring Mendoza wine country. They recommend top wineries and arrange private lunch bookings. The gated property is very secure. We will definitely return!"',

            // Direct Benefits Banner
            ben_title: 'Book Direct for the Guaranteed Best Rate',
            ben_desc: 'No portal commissions. Dedicated personal service and exclusive direct perks when reserving directly with us.',
            ben_1_title: 'Best Rate',
            ben_1_desc: 'Zero booking platform fees',
            ben_2_title: 'Artisan Breakfast',
            ben_2_desc: 'Freshly baked every morning',
            ben_3_title: 'Flexibility',
            ben_3_desc: 'Early check-in upon availability',
            ben_4_title: 'Direct WhatsApp',
            ben_4_desc: 'Instant personalized reply',
            ben_btn: 'Chat via WhatsApp',

            // Footer & Contact
            footer_desc: 'Boutique inn personally hosted by its owners in Chacras de Coria, Mendoza. Country serenity, verdant gardens, swimming pool, and authentic hospitality steps from renowned wineries.',
            footer_contact_title: 'Contact Information',
            footer_addr_lbl: 'Address:',
            footer_addr_val: 'Medrano 2715, Chacras de Coria, Luján de Cuyo, Mendoza (Postal Code 5505)',
            footer_wa_lbl: 'Direct WhatsApp:',
            footer_tel_lbl: 'Front Desk / Admin:',
            footer_ig_lbl: 'Instagram:',
            footer_hours_lbl: 'Hours:',
            footer_hours_val: 'Check-in 2:00 PM • Check-out 11:00 AM',
            footer_map_title: 'Location in Chacras',
            footer_map_hint: 'Medrano 2715 — Convenient access via Panamericana Highway / Acceso Sur',
            footer_rights: '© 2026 Posada Casa Lopez. All rights reserved.',
            footer_dev_by: 'Developed by',

            // Habitacion.html
            room_back_link: 'Back to the Inn',
            room_summary_title: 'Your Stay Summary',
            room_nights_lbl: 'nights',
            room_total_lbl: 'Estimated Total',
            room_btn_book: 'Book & Pay Online',
            room_tab_desc: 'Description & Comfort',
            room_tab_amenities: 'Included Amenities',
            room_tab_location: 'Location & Surroundings',
            room_specs_size: 'Spacious Suite',
            room_specs_guests: 'Guests',
            room_specs_bed: 'Bed Setup',
            room_specs_view: 'Views',
            room_specs_view_val: 'Park & Gardens',

            // Mercado Pago Modal
            mp_modal_title: 'Secure Checkout — Mercado Pago',
            mp_tab_card: 'Debit / Credit Card',
            mp_tab_account: 'Mercado Pago Account Balance',
            mp_card_num: 'Card Number',
            mp_card_name: 'Cardholder Name (as shown on card)',
            mp_card_exp: 'Expiration Date',
            mp_card_cvv: 'Security Code (CVV)',
            mp_card_dni: 'ID / Passport Number',
            mp_installments: 'Installment Options',
            mp_btn_pay: 'Confirm & Pay with Mercado Pago',
            mp_processing: 'Securely processing payment with Mercado Pago...',
            mp_success_title: 'Payment Confirmed & Reservation Approved!',
            mp_success_sub: 'Your stay at Posada Casa Lopez has been successfully booked.',
            mp_code_lbl: 'Booking Reference:',
            mp_holder_lbl: 'Guest Name:',
            mp_dates_lbl: 'Dates:',
            mp_total_lbl: 'Total Paid:',
            mp_btn_wa: 'Send Receipt via WhatsApp'
        },

        pt: {
            // Header & Nav
            nav_home: 'Início',
            nav_about: 'A Pousada',
            nav_facilities: 'Comodidades',
            nav_rooms: 'Acomodações',
            nav_wine: 'Enoturismo',
            nav_contact: 'Contato',
            btn_reserve: 'Reservar',
            hero_subtitle: 'Chacras de Coria • Mendoza',
            hero_discover: 'Descobrir',

            // Booking Bar
            book_checkin: 'Check-in',
            book_checkout: 'Check-out',
            book_guests: 'Hóspedes',
            book_btn: 'Ver Acomodações',
            opt_1guest: '1 Adulto',
            opt_2guests: '2 Adultos (Casal / Twins)',
            opt_3guests: '3 Adultos',
            opt_4guests: '4 Pessoas (Família)',
            opt_5guests: '+5 Pessoas (Grupo)',

            // About Section
            about_tag: 'Hospitalidade & Natureza',
            about_title: 'Bem-vindos à Casa Lopez',
            about_quote: '"Um lugar para desacelerar e aproveitar o simples. 🍃 Chacras de Coria, Mendoza"',
            about_lead: 'Pousada boutique acolhedora atendida com carinho por seus próprios donos, nativos de Chacras de Coria desde quando era um povoado pacato cercado de vinhas centenárias.',
            about_p1: 'Nosso maior desejo é que cada hóspede viva momentos inesquecíveis neste recanto pitoresco de Mendoza. Um parque arborizado com árvores frondosas e o canto dos pássaros fazem da Casa Lopez um verdadeiro oásis de paz, silêncio e reconexão.',
            about_p2: 'Desfrute da nossa piscina ao ar livre cercada por gramados verdes, cafés da manhã coloniais caseiros preparados todos os dias e a proximidade imediata das vinícolas mais consagradas de Luján de Cuyo.',
            about_owners_badge_1: 'Atendido por seus',
            about_owners_badge_2: 'Próprios Donos',
            about_feat_loc_title: 'Chacras de Coria',
            about_feat_loc_sub: 'Medrano 2715, Mendoza',
            about_feat_pool_title: 'Piscina & Parque',
            about_feat_pool_sub: 'Solário e relaxamento natural',

            // Facilities
            fac_tag: 'Conforto & Bem-Estar',
            fac_title: 'Serviços para o seu Descanso',
            fac_desc: 'Cada detalhe na Casa Lopez foi pensado para proporcionar uma estada relaxante, agradável e sem preocupações.',
            fac_pool_title: 'Piscina ao Ar Livre',
            fac_pool_desc: 'Água cristalina cercada por jardim verde e espreguiçadeiras para os dias ensolarados de Mendoza.',
            fac_breakfast_title: 'Café da Manhã Incluso',
            fac_breakfast_desc: 'Deliciosos produtos locais, confeitaria caseira fresquinha, café de qualidade e frutas da estação.',
            fac_garden_title: 'Jardim & Terraço',
            fac_garden_desc: 'Árvores frondosas, pérgulas sombreadas e o canto dos pássaros em uma atmosfera campestre única.',
            fac_wifi_title: 'Wi-Fi de Alta Velocidade',
            fac_wifi_desc: 'Cobertura gratuita em todos os quartos e áreas sociais ao ar livre da propriedade.',
            fac_ac_title: 'Ar-Condicionado',
            fac_ac_desc: 'Equipamentos split quente/frio individuais em cada suíte para perfeito conforto térmico.',
            fac_parking_title: 'Estacionamento Privado',
            fac_parking_desc: 'Estacionamento fechado dentro da propriedade com total segurança para o seu veículo.',
            fac_wine_title: 'Consultoria de Vinícolas',
            fac_wine_desc: 'Recomendações exclusivas e agendamento de degustações e almoços harmonizados nas vinícolas.',
            fac_tv_title: 'Smart TV & Streaming',
            fac_tv_desc: 'Televisores de tela plana em todos os quartos com canais e conectividade para suas séries e filmes.',

            // Rooms Section
            rooms_tag: 'Descanso de Luxo',
            rooms_title: 'Nossas Acomodações & Suítes',
            rooms_desc: 'Espaços amplos e iluminados com pé-direito alto, madeiras nobres e vistas diretas para nossos jardins.',
            room_btn_view: 'Ver Detalhes & Reservar',
            room_night_unit: 'por noite',
            room_suite_cipres: 'Suíte Ciprés',
            room_suite_cipres_desc: 'Suíte master espaçosa com cama King ou 2 camas de solteiro, banheiro privativo e linda vista para o jardim.',
            room_suite_ombu: 'Suíte Ombú',
            room_suite_ombu_desc: 'Acomoda até 3 pessoas com cama de casal mais cama de solteiro. Pé-direito alto de estilo colonial e máxima serenidade.',
            room_suite_alamo: 'Suíte Álamo',
            room_suite_alamo_desc: 'Charmosa suíte romântica com cama Queen, decoração campestre e acesso direto às varandas do parque.',
            room_damasco: 'Quarto Damasco',
            room_damasco_desc: 'Quarto duplo luminoso com cama de casal ou twins, ar-condicionado split e decoração autêntica de Mendoza.',
            room_datil: 'Quarto Dátil',
            room_datil_desc: 'Quarto confortável para dois com lençóis de algodão egípcio e vista panorâmica para a vegetação nativa.',
            room_suite_sauce: 'Suíte Sauce',
            room_suite_sauce_desc: 'Suíte distinta com cama King Size, janelões voltados para a piscina e recanto aconchegante de leitura.',
            room_tamarindo: 'Depto Tamarindo',
            room_tamarindo_desc: 'Apartamento independente de 2 quartos (até 4 hóspedes) com sala de estar privativa e banheiro completo.',
            room_nogal: 'Quarto Nogal',
            room_nogal_desc: 'Quarto aconchegante com piso de madeira, luz natural matinal e todo o conforto para um sono reparador.',
            room_suite_ceibo: 'Suíte Ceibo',
            room_suite_ceibo_desc: 'Suíte premium com saída direta para a piscina e solário. Ideal para descansar cercado pelo silêncio da natureza.',

            // Tags
            tag_king_twins: 'King ou 2 Twins',
            tag_triple: 'Triplo (King + Twin)',
            tag_queen: 'Cama Queen Casal',
            tag_family: 'Família (4 Pessoas)',
            tag_breakfast: 'Café colonial incluso',
            tag_wifi: 'Wi-Fi 100 Mbps',
            tag_pool: 'Saída para piscina',
            tag_ac: 'Ar Quente/Frio',
            tag_parking: 'Estacionamento livre',

            // Wine Tourism
            wine_tag: 'Terra do Malbec',
            wine_title: 'Enoturismo & Vinícolas de Autor',
            wine_desc: 'A Posada Casa Lopez desfruta de uma localização privilegiada em Chacras de Coria, coração da Primeira Zona vitivinícola de Mendoza.',
            wine_item1_title: 'Vinícolas a Poucos Minutos',
            wine_item1_desc: 'Pulenta Estate, Clos de Chacras, Catena Zapata, Nieto Senetiner e Norton a minutos da nossa porta.',
            wine_item2_title: 'Passeios de Bicicleta Entre Vinhas',
            wine_item2_desc: 'Aluguel de bicicletas para passear pelas alamedas arborizadas e estradas do vinho com total liberdade.',
            wine_item3_title: 'Roteiro Gastronômico de Chacras',
            wine_item3_desc: 'Restaurantes autorais premiados, bistrôs acolhedores, cafés especiais e wine bars ao redor da praça.',

            // Reviews
            reviews_tag: 'Avaliações Reais',
            reviews_title: 'Experiências dos Nossos Hóspedes',
            reviews_desc: 'A satisfação de quem nos escolhe ano após ano reflete o carinho com que cuidamos de cada detalhe.',
            rev1_text: '"O atendimento dos donos é insuperável. O parque é um paraíso de tranquilidade, a piscina impecável e o café da manhã com bolos caseiros é maravilhoso. Próximo de todas as vinícolas de Chacras."',
            rev2_text: '"Um lugar mágico para descansar. Quarto superconfortável, o silêncio da noite e o carinho dos proprietários fazem você querer voltar sempre. Superou todas as expectativas."',
            rev3_text: '"Localização perfeita para enoturismo em Mendoza. Ajudam a agendar visitas e almoços nas melhores vinícolas. O estacionamento fechado dá muita segurança. Voltaremos com certeza!"',

            // Direct Benefits Banner
            ben_title: 'Reserve Direto com o Melhor Preço Garantido',
            ben_desc: 'Sem taxas de intermediação. Atendimento personalizado e benefícios exclusivos ao falar diretamente conosco.',
            ben_1_title: 'Melhor Tarifa',
            ben_1_desc: 'Sem taxas de plataformas',
            ben_2_title: 'Café da Manhã Caseiro',
            ben_2_desc: 'Fresco todas as manhãs',
            ben_3_title: 'Flexibilidade',
            ben_3_desc: 'Early check-in sob consulta',
            ben_4_title: 'WhatsApp Direto',
            ben_4_desc: 'Resposta rápida e atenciosa',
            ben_btn: 'Falar no WhatsApp',

            // Footer & Contact
            footer_desc: 'Pousada boutique atendida por seus donos em Chacras de Coria, Mendoza. Tranquilidade campestre, jardins exuberantes, piscina e hospitalidade mendocina a passos das melhores vinícolas.',
            footer_contact_title: 'Informações de Contato',
            footer_addr_lbl: 'Endereço:',
            footer_addr_val: 'Medrano 2715, Chacras de Coria, Luján de Cuyo, Mendoza (CEP 5505)',
            footer_wa_lbl: 'WhatsApp Direto:',
            footer_tel_lbl: 'Telefone da Administração:',
            footer_ig_lbl: 'Instagram:',
            footer_hours_lbl: 'Horários:',
            footer_hours_val: 'Check-in 14:00 • Check-out 11:00',
            footer_map_title: 'Localização em Chacras',
            footer_map_hint: 'Medrano 2715 — Acesso fácil pela Rota Panamericana / Acesso Sul',
            footer_rights: '© 2026 Posada Casa Lopez. Todos os direitos reservados.',
            footer_dev_by: 'Desenvolvido por',

            // Habitacion.html
            room_back_link: 'Voltar à Pousada',
            room_summary_title: 'Resumo da Sua Estada',
            room_nights_lbl: 'noites',
            room_total_lbl: 'Total Estimado',
            room_btn_book: 'Reservar & Pagar Online',
            room_tab_desc: 'Descrição & Conforto',
            room_tab_amenities: 'Comodidades Inclusas',
            room_tab_location: 'Localização & Região',
            room_specs_size: 'Suíte Espaçosa',
            room_specs_guests: 'Hóspedes',
            room_specs_bed: 'Configuração da Cama',
            room_specs_view: 'Vistas',
            room_specs_view_val: 'Parque & Jardins',

            // Mercado Pago Modal
            mp_modal_title: 'Checkout Seguro — Mercado Pago',
            mp_tab_card: 'Cartão de Débito / Crédito',
            mp_tab_account: 'Saldo em Conta Mercado Pago',
            mp_card_num: 'Número do Cartão',
            mp_card_name: 'Nome do Titular (como impresso no cartão)',
            mp_card_exp: 'Validade',
            mp_card_cvv: 'Código (CVV)',
            mp_card_dni: 'CPF / Passaporte do Titular',
            mp_installments: 'Opções de Parcelamento',
            mp_btn_pay: 'Confirmar e Pagar com Mercado Pago',
            mp_processing: 'Processando pagamento seguro com Mercado Pago...',
            mp_success_title: 'Pagamento Confirmado e Reserva Aprovada!',
            mp_success_sub: 'Sua estada na Posada Casa Lopez foi confirmada com sucesso.',
            mp_code_lbl: 'Código da Reserva:',
            mp_holder_lbl: 'Titular:',
            mp_dates_lbl: 'Datas:',
            mp_total_lbl: 'Valor Pago:',
            mp_btn_wa: 'Enviar Comprovante via WhatsApp'
        }
    };

    const ROOMS_DATA = {
        es: {
            cipres: {
                name: 'Suite Ciprés',
                badge: 'King o 2 Twins',
                tagline: 'Calidez, luminosidad y vista directa al parque añoso',
                bed: '1 Cama King Size (o 2 Sommiers Twins)',
                view: 'Vista al parque arbolado y piscina',
                desc: 'La Suite Ciprés ofrece un remanso de paz con altos techos de madera y vistas al jardín centenario. Disfruta de ropa de cama de algodón egipcio de máxima calidad, baño privado en suite y el silencio característico de Chacras de Coria.'
            },
            ombu: {
                name: 'Suite Ombú',
                badge: 'Triple (King + Twin)',
                tagline: 'Amplitud y serenidad colonial para hasta 3 huéspedes',
                bed: '1 Cama Matrimonial + 1 Cama Individual',
                view: 'Vista a la sombra de árboles centenarios',
                desc: 'Un espacio amplio y luminoso con techos altos y detalles coloniales mendocinos. Acomoda hasta 3 personas con total confort, ideal para parejas con un hijo o grupos de amigos en ruta de enoturismo.'
            },
            alamo: {
                name: 'Suite Álamo',
                badge: 'Queen Matrimonial',
                tagline: 'Intimidad, calidez campestre y descanso absoluto',
                bed: '1 Cama Queen Matrimonial',
                view: 'Vista a jardines y senderos floridos',
                desc: 'La Suite Álamo destaca por su ambientación romántica y acogedora. Cuenta con salida inmediata a las galerías exteriores, baño privado completo y detalles rústicos refinados.'
            },
            damasco: {
                name: 'Habitación Damasco',
                badge: 'King o 2 Twins',
                tagline: 'Luz natural, tonos cálidos y confort acústico',
                bed: '1 Cama King Size (o 2 Sommiers Twins)',
                view: 'Vista a patios internos y arboleda',
                desc: 'Inspirada en los frutales de la quinta original de Casa Lopez, la Habitación Damasco combina tonos terracota y blanco puro. Posee excelente iluminación natural y baño completo de diseño.'
            },
            datil: {
                name: 'Habitación Dátil',
                badge: 'King o 2 Twins',
                tagline: 'Luminosidad matutina y tranquilidad sonora',
                bed: '1 Cama King Size (o 2 Sommiers Twins)',
                view: 'Vista al patio colonial y jardines',
                desc: 'Una habitación fresca y luminosa con orientación este que recibe la suave luz del amanecer mendocino. Equipada con sommiers hoteleros de primera línea y escritorio de lectura.'
            },
            sauce: {
                name: 'Suite Sauce',
                badge: 'King o 2 Twins',
                tagline: 'Inmediata cercanía a la galería para disfrutar al aire libre',
                bed: '1 Cama King Size (o 2 Sommiers Twins)',
                view: 'Vista a los sauces añosos y parque',
                desc: 'La Suite Sauce conjuga la nobleza de la arquitectura colonial con comodidades contemporáneas. Su cercanía inmediata a la galería permite relajarse en los sillones exteriores tras un día de recorrido por bodegas.'
            },
            tamarindo: {
                name: 'Depto Tamarindo',
                badge: '2 Dormitorios (4 Pax)',
                tagline: 'Unidad residencial de 2 ambientes para familias',
                bed: 'Dormitorio 1: Cama Queen | Dormitorio 2: 2 Sommiers Twins',
                view: 'Vista panorámica al parque y piscina',
                desc: 'El Departamento Tamarindo es la opción más amplia de la posada. Con dos dormitorios independientes, permite disfrutar de privacidad y comodidad absoluta para familias o grupos de hasta 4 personas.'
            },
            nogal: {
                name: 'Habitación Nogal',
                badge: 'King o 2 Twins',
                tagline: 'Silencio profundo y entorno verde reparador',
                bed: '1 Cama King Size (o 2 Sommiers Twins)',
                view: 'Vista al jardín posterior y nogales',
                desc: 'Ubicada en el sector más calmo de la posada, la Habitación Nogal ofrece una experiencia de desconexión y descanso total, con delicados detalles en nogal lustrado y textiles naturales.'
            },
            ceibo: {
                name: 'Suite Ceibo',
                badge: 'King o 2 Twins',
                tagline: 'Salida directa al parque, solarium y piscina',
                bed: '1 Cama King Size (o 2 Sommiers Twins)',
                view: 'Vista directa a piscina y solarium',
                desc: 'La Suite Ceibo ofrece el privilegio de despertar y acceder directamente al césped y la piscina. Espaciosa, con diseño de líneas puras y luminosidad radiante durante toda la tarde.'
            }
        },
        en: {
            cipres: {
                name: 'Ciprés Suite',
                badge: 'King or 2 Twins',
                tagline: 'Warmth, brightness, and direct views of the ancient wooded park',
                bed: '1 King Size Bed (or 2 Twin Beds)',
                view: 'View of the tree-lined park and swimming pool',
                desc: 'The Ciprés Suite offers a tranquil sanctuary featuring high wooden beamed ceilings and views of the century-old garden. Enjoy premium Egyptian cotton linens, private en-suite bathroom, and the serene silence of Chacras de Coria.'
            },
            ombu: {
                name: 'Ombú Suite',
                badge: 'Triple (King + Twin)',
                tagline: 'Colonial spaciousness and serenity for up to 3 guests',
                bed: '1 Matrimonial Bed + 1 Single Bed',
                view: 'Shaded views of ancient native trees',
                desc: 'A spacious and luminous retreat with high ceilings and traditional Mendoza colonial architectural accents. Accommodates up to 3 guests with supreme comfort, perfect for couples with a child or wine tourism companions.'
            },
            alamo: {
                name: 'Álamo Suite',
                badge: 'Queen Matrimonial',
                tagline: 'Intimacy, country warmth, and absolute relaxation',
                bed: '1 Queen Matrimonial Bed',
                view: 'View of flowering gardens and walking paths',
                desc: 'The Álamo Suite stands out for its romantic and cozy ambiance. Features immediate walk-out access to the outdoor verandas, full private en-suite bathroom, and refined rustic appointments.'
            },
            damasco: {
                name: 'Damasco Room',
                badge: 'King or 2 Twins',
                tagline: 'Natural light, warm hues, and acoustic comfort',
                bed: '1 King Size Bed (or 2 Twin Beds)',
                view: 'View of internal courtyards and grove',
                desc: 'Inspired by the historic fruit orchards of Casa Lopez, the Damasco Room pairs warm terracotta tones with pure white. Boasts generous natural illumination, designer bathroom, and acoustic insulation.'
            },
            datil: {
                name: 'Dátil Room',
                badge: 'King or 2 Twins',
                tagline: 'Morning sunlight and acoustic tranquility',
                bed: '1 King Size Bed (or 2 Twin Beds)',
                view: 'View of colonial courtyard and gardens',
                desc: 'A fresh, bright east-facing room welcoming the gentle Mendoza sunrise. Appointed with premium hotel-grade sommiers, reading desk, and soothing views of native vegetation.'
            },
            sauce: {
                name: 'Sauce Suite',
                badge: 'King or 2 Twins',
                tagline: 'Steps from the veranda to enjoy the open air',
                bed: '1 King Size Bed (or 2 Twin Beds)',
                view: 'View of historic willow trees and park',
                desc: 'The Sauce Suite blends historic colonial character with modern comfort. Its immediate proximity to the covered veranda invites peaceful moments with a glass of wine after touring vineyards.'
            },
            tamarindo: {
                name: 'Tamarindo Apartment',
                badge: '2 Bedrooms (4 Guests)',
                tagline: 'Spacious 2-room residential residence for families',
                bed: 'Bedroom 1: Queen Bed | Bedroom 2: 2 Twin Beds',
                view: 'Panoramic view of the park and pool',
                desc: 'The Tamarindo Apartment is our most expansive accommodation. Featuring two private bedrooms and a living area, it affords privacy and luxury comfort for families or groups of up to 4 guests.'
            },
            nogal: {
                name: 'Nogal Room',
                badge: 'King or 2 Twins',
                tagline: 'Deep quiet and restorative greenery',
                bed: '1 King Size Bed (or 2 Twin Beds)',
                view: 'View of the rear garden and walnut trees',
                desc: 'Nestled in the quietest wing of the inn, the Nogal Room provides a peaceful, secluded haven with walnut wood accents and natural fabrics for deep, restorative sleep.'
            },
            ceibo: {
                name: 'Ceibo Suite',
                badge: 'King or 2 Twins',
                tagline: 'Direct step-out access to the park, solarium, and pool',
                bed: '1 King Size Bed (or 2 Twin Beds)',
                view: 'Direct view of swimming pool and sun deck',
                desc: 'The Ceibo Suite offers the exclusive luxury of waking up and stepping straight onto the emerald lawn and pool deck. Generous proportions, clean architectural lines, and golden afternoon sun.'
            }
        },
        pt: {
            cipres: {
                name: 'Suíte Ciprés',
                badge: 'King ou 2 Twins',
                tagline: 'Aconchego, luminosidade e vista direta para o parque arborizado',
                bed: '1 Cama King Size (ou 2 Camas Twins)',
                view: 'Vista para o parque arborizado e piscina',
                desc: 'A Suíte Ciprés oferece um refúgio de paz com pé-direito alto e vista para o jardim centenário. Desfrute de lençóis de algodão egípcio de alto padrão, banheiro privativo e o silêncio de Chacras de Coria.'
            },
            ombu: {
                name: 'Suíte Ombú',
                badge: 'Triplo (King + Twin)',
                tagline: 'Amplitude e serenidade colonial para até 3 hóspedes',
                bed: '1 Cama de Casal + 1 Cama de Solteiro',
                view: 'Vista para a sombra de árvores centenárias',
                desc: 'Um espaço amplo e iluminado com pé-direito alto e detalhes coloniais de Mendoza. Acomoda até 3 pessoas com conforto absoluto, perfeito para casais com filho ou amigos fazendo enoturismo.'
            },
            alamo: {
                name: 'Suíte Álamo',
                badge: 'Queen Casal',
                tagline: 'Privacidade, aconchego campestre e descanso absoluto',
                bed: '1 Cama Queen Casal',
                view: 'Vista para jardins e caminhos floridos',
                desc: 'A Suíte Álamo se destaca por sua atmosfera romântica e acolhedora. Conta com saída direta para as varandas exteriores, banheiro privativo completo e acabamento rústico refinado.'
            },
            damasco: {
                name: 'Quarto Damasco',
                badge: 'King ou 2 Twins',
                tagline: 'Luz natural, tons acolhedores e conforto acústico',
                bed: '1 Cama King Size (ou 2 Camas Twins)',
                view: 'Vista para pátios internos e arvoredo',
                desc: 'Inspirado nos pomares originais da Casa Lopez, o Quarto Damasco combina tons terracota e branco puro. Possui excelente iluminação natural, banheiro de design e isolamento acústico.'
            },
            datil: {
                name: 'Quarto Dátil',
                badge: 'King ou 2 Twins',
                tagline: 'Luminosidade matinal e tranquilidade sonora',
                bed: '1 Cama King Size (ou 2 Camas Twins)',
                view: 'Vista para o pátio colonial e jardins',
                desc: 'Um quarto fresco e iluminado voltado para o leste que recebe a suave luz da manhã de Mendoza. Equipado com sommiers de hotelaria de primeira linha e escrivaninha de leitura.'
            },
            sauce: {
                name: 'Suíte Sauce',
                badge: 'King ou 2 Twins',
                tagline: 'Proximidade imediata da varanda para relaxar ao ar livre',
                bed: '1 Cama King Size (ou 2 Camas Twins)',
                view: 'Vista para os salgueiros centenários e parque',
                desc: 'A Suíte Sauce conjuga a nobreza da arquitetura colonial com o conforto moderno. Sua varanda contígua convida a relaxar nas poltronas após um agradável dia de degustação nas vinícolas.'
            },
            tamarindo: {
                name: 'Depto Tamarindo',
                badge: '2 Quartos (4 Hóspedes)',
                tagline: 'Unidade residencial de 2 ambientes para famílias',
                bed: 'Quarto 1: Cama Queen | Quarto 2: 2 Camas Twins',
                view: 'Vista panorâmica para o parque e piscina',
                desc: 'O Departamento Tamarindo é a opção mais ampla da pousada. Com dois dormitórios privativos e sala de estar, garante privacidade e total comodidade para famílias ou grupos de até 4 pessoas.'
            },
            nogal: {
                name: 'Quarto Nogal',
                badge: 'King ou 2 Twins',
                tagline: 'Silêncio profundo e natureza relaxante',
                bed: '1 Cama King Size (ou 2 Camas Twins)',
                view: 'Vista para o jardim posterior e nogueiras',
                desc: 'Localizado na ala mais calma da pousada, o Quarto Nogal proporciona uma experiência de descanso absoluto, com acabamentos em madeira nobre e tecidos naturais para noites revigorantes.'
            },
            ceibo: {
                name: 'Suíte Ceibo',
                badge: 'King ou 2 Twins',
                tagline: 'Saída direta para o parque, solário e piscina',
                bed: '1 Cama King Size (ou 2 Camas Twins)',
                view: 'Vista direta para a piscina e solário',
                desc: 'A Suíte Ceibo oferece o privilégio de acordar e sair direto para o gramado e a piscina. Espaçosa, com design de linhas puras e luminosidade radiante durante toda a tarde.'
            }
        }
    };

    const PHRASE_MAP = {
        en: {
            'Nuestras 9 Habitaciones': 'Our 9 Guest Rooms & Suites',
            'Exclusividad & Silencio': 'Exclusivity & Tranquility',
            'Unidades boutique privadas con vistas al jardín, ropa blanca de alta calidad y versatilidad total entre camas matrimoniales King y sommiers individuales.': 'Private boutique rooms with garden views, luxury Egyptian linens, and total versatility between King and Twin beds.',
            'Mejor Tarifa Online': 'Guaranteed Best Rate',
            'por noche': 'per night',
            '/ noche': '/ night',
            'Baño Privado': 'Private Bathroom',
            'Baño en Suite': 'En-suite Bathroom',
            'A/C Frío-Calor': 'Heating & A/C',
            'Wi-Fi': 'Wi-Fi',
            'Wi-Fi 100 Mbps': '100 Mbps Wi-Fi',
            'Smart TV': 'Smart TV',
            'Salida a piscina': 'Pool Access',
            'Galería privada': 'Private Veranda',
            'Vista a piscina': 'Pool View',
            'Desayuno incluido': 'Breakfast Included',
            'Desayuno buffet': 'Buffet Breakfast',
            'Estacionamiento': 'Free Parking',
            'Estacionamiento cubierto': 'Covered Parking',
            'Hasta 2 Huéspedes': 'Up to 2 Guests',
            'Hasta 3 Huéspedes': 'Up to 3 Guests',
            'Hasta 4 Huéspedes': 'Up to 4 Guests',
            '2 Dormitorios (4 Pax)': '2 Bedrooms (4 Pax)',
            'Triple (King + Twin)': 'Triple (King + Twin)',
            'Queen Matrimonial': 'Queen Matrimonial Bed',
            'King o 2 Twins': 'King or 2 Twins',
            'Parrilla & Quincho': 'Barbecue & Quincho Lounge',
            'Sector de fuegos para compartir tradicionales asados mendocinos bajo las estrellas.': 'Traditional Argentine fire-pit area to savor Mendoza outdoor barbecues under the starry sky.',
            'Asesoría de Bodegas': 'Winery & Tour Advisory',
            'Recomendaciones exclusivas y reservas en los mejores viñedos y restaurantes de la zona.': 'Bespoke recommendations and priority bookings for premier wineries and dining in Chacras.',
            'o 3 cuotas fijas de': 'or 3 installments of',
            'Tarifas y disponibilidad para': 'Rates and availability for',
            'Hacé clic en cualquier suite para ver su ficha y reservar online con Mercado Pago.': 'Click on any suite to view details and book online with Mercado Pago.',
            'del': 'from',
            'al': 'to'
        },
        pt: {
            'Nuestras 9 Habitaciones': 'Nossas 9 Acomodações & Suítes',
            'Exclusividad & Silencio': 'Exclusividade & Tranquilidade',
            'Unidades boutique privadas con vistas al jardín, ropa blanca de alta calidad y versatilidad total entre camas matrimoniales King y sommiers individuales.': 'Acomodações boutique privativas com vista para o jardim, lençóis nobres de alto padrão e total versatilidade entre camas King e individuais.',
            'Mejor Tarifa Online': 'Melhor Tarifa Online',
            'por noche': 'por noite',
            '/ noche': '/ noite',
            'Baño Privado': 'Banheiro Privativo',
            'Baño en Suite': 'Banheiro Privativo',
            'A/C Frío-Calor': 'Ar Quente/Frio',
            'Wi-Fi': 'Wi-Fi',
            'Wi-Fi 100 Mbps': 'Wi-Fi 100 Mbps',
            'Smart TV': 'Smart TV',
            'Salida a piscina': 'Saída para a Piscina',
            'Galería privada': 'Varanda Privativa',
            'Vista a piscina': 'Vista para a Piscina',
            'Desayuno incluido': 'Café da Manhã Incluso',
            'Desayuno buffet': 'Café da Manhã Colonial',
            'Estacionamiento': 'Estacionamento Livre',
            'Estacionamiento cubierto': 'Estacionamento Fechado',
            'Hasta 2 Huéspedes': 'Até 2 Hóspedes',
            'Hasta 3 Huéspedes': 'Até 3 Hóspedes',
            'Hasta 4 Huéspedes': 'Até 4 Hóspedes',
            '2 Dormitorios (4 Pax)': '2 Quartos (4 Pessoas)',
            'Triple (King + Twin)': 'Triplo (King + Twin)',
            'Queen Matrimonial': 'Cama Queen Casal',
            'King o 2 Twins': 'King ou 2 Twins',
            'Parrilla & Quincho': 'Espaço Gourmet & Churrasqueira',
            'Sector de fuegos para compartir tradicionales asados mendocinos bajo las estrellas.': 'Espaço de parrilla para saborear o tradicional churrasco mendocino sob as estrelas.',
            'Asesoría de Bodegas': 'Consultoria de Vinícolas',
            'Recomendaciones exclusivas y reservas en los mejores viñedos y restaurantes de la zona.': 'Recomendações exclusivas e agendamentos nas melhores vinícolas e restaurantes da região.',
            'o 3 cuotas fijas de': 'ou 3 parcelas fixas de',
            'Tarifas y disponibilidad para': 'Tarifas e disponibilidade para',
            'Hacé clic en cualquier suite para ver su ficha y reservar online con Mercado Pago.': 'Clique em qualquer suíte para ver detalhes e reservar online via Mercado Pago.',
            'del': 'de',
            'al': 'a'
        }
    };

    let currentLang = localStorage.getItem('casalopez_lang') || 'es';
    if (!TRANSLATIONS[currentLang]) currentLang = 'es';

    function translateDOMNodes(lang) {
        if (lang === 'es') {
            document.querySelectorAll('[data-original-text]').forEach(el => {
                el.textContent = el.getAttribute('data-original-text');
            });
            return;
        }

        const map = PHRASE_MAP[lang];
        if (!map) return;

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    const tag = parent.tagName.toLowerCase();
                    if (tag === 'script' || tag === 'style' || tag === 'svg' || tag === 'code' || parent.classList.contains('lang-btn')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );

        const nodesToUpdate = [];
        let node;
        while ((node = walker.nextNode())) {
            const raw = node.textContent.trim();
            if (map[raw]) {
                nodesToUpdate.push({ node, translation: map[raw], original: raw });
            }
        }

        nodesToUpdate.forEach(item => {
            const parent = item.node.parentElement;
            if (parent && !parent.hasAttribute('data-original-text')) {
                parent.setAttribute('data-original-text', item.original);
            }
            item.node.textContent = item.translation;
        });
    }

    function updateRoomCards(lang) {
        const roomsMap = ROOMS_DATA[lang] || ROOMS_DATA['es'];
        const cardElements = document.querySelectorAll('.room-card-clickable');
        cardElements.forEach(card => {
            const onclickAttr = card.getAttribute('onclick') || '';
            const match = onclickAttr.match(/goToRoomDetail\(['"]([^'"]+)['"]\)/);
            if (match && match[1]) {
                const roomId = match[1];
                const rData = roomsMap[roomId];
                if (rData) {
                    const titleEl = card.querySelector('h4');
                    if (titleEl) titleEl.textContent = rData.name;
                    const badgeEl = card.querySelector('.room-badge-bed');
                    if (badgeEl) badgeEl.textContent = rData.badge;
                    const descEl = card.querySelector('p.text-muted');
                    if (descEl) descEl.textContent = rData.desc;
                }
            }
        });
    }

    function setLanguage(lang) {
        if (!TRANSLATIONS[lang]) lang = 'es';
        currentLang = lang;
        localStorage.setItem('casalopez_lang', lang);
        document.documentElement.lang = lang;

        const dict = TRANSLATIONS[lang];

        // 1. Elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // 2. Elements with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.placeholder = dict[key];
            }
        });

        // 3. Elements with data-i18n-title
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (dict[key]) {
                el.title = dict[key];
            }
        });

        // 4. Update Select Options in Booking Bar
        const selectGuests = document.getElementById('selectGuests');
        if (selectGuests && selectGuests.options.length >= 4) {
            selectGuests.options[0].text = dict.opt_1guest || '1 Adulto';
            selectGuests.options[1].text = dict.opt_2guests || '2 Adultos (Pareja / Twins)';
            selectGuests.options[2].text = dict.opt_3guests || '3 Adultos';
            selectGuests.options[3].text = dict.opt_4guests || '4 Personas (Familia)';
            if (selectGuests.options[4]) {
                selectGuests.options[4].text = dict.opt_5guests || '+5 Personas (Grupo)';
            }
        }

        // 5. Update active state on all language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 6. Update room cards on index.html
        updateRoomCards(lang);

        // 7. Update phrase map across DOM
        translateDOMNodes(lang);

        // 8. Update room on habitacion.html if present
        if (typeof window.loadRoom === 'function' && window.currentRoomId) {
            window.loadRoom(window.currentRoomId);
            if (typeof window.buildOtherRoomsPills === 'function') window.buildOtherRoomsPills();
            if (typeof window.recalculateBooking === 'function') window.recalculateBooking();
        }

        // 9. WhatsApp floating button
        const floatWa = document.querySelector('.float.btn-whatsapp');
        if (floatWa) {
            if (lang === 'en') {
                floatWa.title = 'Inquire via WhatsApp';
                floatWa.href = 'https://wa.me/5492615077635?text=Hello%20Posada%20Casa%20Lopez!%20I%20would%20like%20to%20inquire%20about%20availability%20for%20a%20stay.';
            } else if (lang === 'pt') {
                floatWa.title = 'Falar pelo WhatsApp';
                floatWa.href = 'https://wa.me/5492615077635?text=Ol%C3%A1%20Posada%20Casa%20Lopez!%20Gostaria%20de%20consultar%20disponibilidade%20para%20uma%20estada.';
            } else {
                floatWa.title = 'Consultar por WhatsApp';
                floatWa.href = 'https://wa.me/5492615077635?text=Hola%20Posada%20Casa%20Lopez!%20Quisiera%20consultar%20disponibilidad%20para%20una%20estadia.';
            }
        }

        // 10. Availability Banner
        const banner = document.getElementById('availabilityBanner');
        const bannerText = document.getElementById('availabilityBannerText');
        const checkIn = document.getElementById('inputCheckIn')?.value;
        const checkOut = document.getElementById('inputCheckOut')?.value;
        const guests = document.getElementById('selectGuests')?.value;
        if (banner && bannerText && checkIn && checkOut && !banner.classList.contains('d-none')) {
            if (lang === 'en') {
                bannerText.innerHTML = `Rates and availability for <strong>${guests}</strong> from <strong>${checkIn}</strong> to <strong>${checkOut}</strong>. Click on any suite to view details and book online with Mercado Pago.`;
            } else if (lang === 'pt') {
                bannerText.innerHTML = `Tarifas e disponibilidade para <strong>${guests}</strong> de <strong>${checkIn}</strong> a <strong>${checkOut}</strong>. Clique em qualquer suíte para ver detalhes e reservar online via Mercado Pago.`;
            } else {
                bannerText.innerHTML = `Tarifas y disponibilidad para <strong>${guests}</strong> del <strong>${checkIn}</strong> al <strong>${checkOut}</strong>. Hacé clic en cualquier suite para ver su ficha y reservar online con Mercado Pago.`;
            }
        }

        window.dispatchEvent(new CustomEvent('casalopez:langchange', { detail: { lang } }));
    }

    function init() {
        document.addEventListener('click', function (e) {
            const btn = e.target.closest('.lang-btn');
            if (btn && btn.hasAttribute('data-lang')) {
                e.preventDefault();
                setLanguage(btn.getAttribute('data-lang'));
            }
        });

        setLanguage(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.CasaLopezI18n = {
        setLanguage: setLanguage,
        getLanguage: () => currentLang,
        t: (key) => (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key,
        dict: TRANSLATIONS,
        rooms_data: ROOMS_DATA
    };
})();
