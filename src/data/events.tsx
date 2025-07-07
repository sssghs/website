import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image?: string;
  additionalInfo?: string;
  photos?: string[];
  requiresRegistration?: boolean;
}
const categories = ['All', 'Academic', 'Arts', 'Career', 'Sports', 'General', 'Cultural'];
const EventsList = (): Event[] => {
  return [
    {
      id: 1,
      title: "Bathukamma",
      date: "October 6, 2024", // Bathukamma typically ends around this time during Dasara
      time: "9:00 AM - 12:00 PM",
      location: "School Grounds",
      category: "Cultural",
      description: "Celebrate the vibrant spirit of Telangana with Bathukamma, a floral festival that honors the feminine energy and the beauty of nature. Join us for an evening of colorful flower arrangements, traditional folk songs, dances, and community bonding.",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470196907_122131574546433731_8543544783392105033_n.jpg?alt=media&token=5a4a1daa-cbfa-45e1-874d-bf0ec376067d",
      additionalInfo: "Everyone is welcome! Women and girls are encouraged to bring their own Bathukamma arrangements. Traditional snacks will be served, and cultural performances will take place throughout the evening.",
      photos: [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470169304_122131574354433731_2323800470442203030_n.jpg?alt=media&token=5785e921-943b-44be-83cd-2ed55155bfb2",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470196907_122131574546433731_8543544783392105033_n.jpg?alt=media&token=5a4a1daa-cbfa-45e1-874d-bf0ec376067d",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470202736_122131574318433731_8213566036903494457_n.jpg?alt=media&token=1056b637-0f51-4c71-b145-8c788c7615ca",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470205132_122131574168433731_292062987463578244_n.jpg?alt=media&token=dfb7fee1-2e9e-403c-a08c-f0d7ab50ee52",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470210591_122131574378433731_53672921583655016_n.jpg?alt=media&token=b474ebe7-d44a-47b8-bea1-467ee1c5ccbb",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470216749_122131574336433731_6115772061112400718_n.jpg?alt=media&token=8b97baee-89a5-41bf-ba78-a055ad882d3c",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470470519_122131574150433731_7790030229840327449_n.jpg?alt=media&token=b79c27b3-98af-4d8a-b708-cccd9bc055f8",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bathukamma%2F470473059_122131573946433731_1450226651830371173_n.jpg?alt=media&token=e21321f8-d4a7-4b7a-bd39-64e5a26f8ae8"
      ],
      requiresRegistration: false
    },
    {
      id: 2,
      title: "Bonalu",
      date: "July 20, 2024", // Bonalu is usually celebrated in July
      time: "9:00 AM - 12:00 PM",
      location: "School Grounds",
      category: "Cultural",
      description: "Join us in celebrating Bonalu, a traditional Telangana festival dedicated to Goddess Mahakali. The event features vibrant processions, devotional performances, and colorful rituals showcasing Telangana's rich spiritual and folk heritage.",
      image: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/469457516_122130574094433731_281329254222500263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dWhP588Oj3UQ7kNvwGPZ6p4&_nc_oc=AdnNXOtWDipu59i8QfNeCYBk3feuLLsGHqDCchXwRUf81SmdF19nPVcZ7bVJBEkYniI&_nc_zt=23&_nc_ht=scontent.fmaa8-1.fna&_nc_gid=_R3fPwACTYFovAAc_gTM9Q&oh=00_AfHXE03gzJSVliQNvUac-z4ay4ycWj08jKg_TSMVjDFU2w&oe=680E613C",
      additionalInfo: "Devotees are welcome to bring Bonam offerings. Enjoy traditional dance performances, music, and local delicacies. Entry is free and open to all.",
      photos: [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bonalu%2F469399586_122130573962433731_7741691093699684908_n.jpg?alt=media&token=e61e42b0-2d66-4a8c-bdd5-a24e6a1dc4ff",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bonalu%2F469410920_122130574220433731_5316744042511969952_n.jpg?alt=media&token=9191251f-3e91-4e79-b0cb-f38e7397ba01",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bonalu%2F469412241_122130573806433731_7425913644516633713_n.jpg?alt=media&token=580971f8-88b6-4e6a-babc-d0ae7b258491",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bonalu%2F469476855_122130574286433731_2425286645352847375_n.jpg?alt=media&token=9f8a652a-1150-4e67-97df-1166411dacfc",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bonalu%2F469592110_122130574016433731_4773381578459839969_n.jpg?alt=media&token=6037155f-ea9c-4106-a25a-a67751895303",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Bonalu%2F469757657_122130573704433731_7696182887224618400_n.jpg?alt=media&token=d4de43f3-bff5-4bb1-bccc-e867fe7ee8e0"
      ],
      requiresRegistration: false
    },
    {
      id: 3,
      title: "Christmas",
      date: "December 23, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "School Grounds",
      category: "Cultural",
      description: "Celebrate the joy and warmth of Christmas with an evening filled with carols, dance performances, a nativity play, and a special appearance by Santa Claus. A magical evening for students, families, and staff alike.",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471264902_122132998226433731_4212658198681685914_n.jpg?alt=media&token=7df4302b-0b29-41e4-99b4-b5258e799197",
      additionalInfo: "Hot chocolate and Christmas treats will be served. Parents are encouraged to bring gifts for the Secret Santa exchange. Don’t forget to wear your festive attire!",
      photos: [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471262468_122132997170433731_3630350331138452616_n.jpg?alt=media&token=41276b86-7e7c-4ef2-8e20-77a49294277a",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471264171_122132998142433731_8490717954218683791_n.jpg?alt=media&token=9ef5cdc3-ae6f-4cd9-8629-e582cba9a696",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471264698_122132997452433731_8009961919049588218_n.jpg?alt=media&token=44d4f5ff-5674-49ef-922d-7490a4fe9a0a",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471264902_122132998226433731_4212658198681685914_n.jpg?alt=media&token=7df4302b-0b29-41e4-99b4-b5258e799197",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471313259_122132997878433731_3262630396536483655_n.jpg?alt=media&token=ab5568e7-87b2-4e38-9c65-62542741fd50",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471325253_122132997596433731_2540829233019177031_n.jpg?alt=media&token=934d45dc-e85a-4c5e-a363-582a1dd732de",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471331357_122132999012433731_5950352628601819802_n.jpg?alt=media&token=db59d2a9-6f2c-4603-a278-861feb6cb659",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471425749_122132997950433731_5131137653741465801_n.jpg?alt=media&token=a11b9123-834e-4e4a-8ddc-e5c71747d590",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Christmas%2F471439854_122132997440433731_235311404612763192_n.jpg?alt=media&token=bb830a95-2553-495b-a449-805336edf6e4"
      ],
      requiresRegistration: false
    },
    {
      id: 4,
      title: "Haritha Haram Plantation Drive",
      date: "July 11, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "School Grounds and Surrounding Area",
      category: "General",
      description: "Join us for the Haritha Haram initiative as we take part in a mass plantation drive to promote a greener and cleaner environment. Students, staff, and volunteers will plant saplings around the campus and nearby areas.",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Haritha%2FHaritha%252F469584711_122130753434433731_5657256177456611463_n.jpg?alt=media&token=61de8de5-6d13-4835-900f-6b92e7eb229c",
      additionalInfo: "Participants are encouraged to bring gardening gloves, hats, and water bottles. Saplings and tools will be provided. Let's make our surroundings lush and vibrant!",
      photos: [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Haritha%2F469568652_122130753524433731_6065372673596062678_n.jpg?alt=media&token=078643a7-8c0c-4eb1-be47-c807fc17461b",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Haritha%2FHaritha%252F469584711_122130753434433731_5657256177456611463_n.jpg?alt=media&token=61de8de5-6d13-4835-900f-6b92e7eb229c",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Haritha%2F469649046_122130753302433731_5442581444574921677_n.jpg?alt=media&token=e86679a0-2076-4d7c-91c2-f49100b1ca12",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Haritha%2F469649341_122130752954433731_3630269289924179280_n.jpg?alt=media&token=8e766bc0-3544-473d-ad89-977bd7b1624b",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Haritha%2F469738233_122130753416433731_1226642678562886963_n.jpg?alt=media&token=354429d4-2bc9-48fd-8576-c518e04d4e6c",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Haritha%2F469886960_122130753740433731_4244989548551341474_n.jpg?alt=media&token=317e2fe3-b0a6-495d-9c23-2d5e0402e514"
      ],
      requiresRegistration: false
    },    
    {
      id: 5,
      title: "Independence Day",
      date: "August 15, 2024",
      time: "7:00 AM - 9:00 AM",
      location: "School Grounds",
      category: "Cultural",
      description: "Join us in celebrating the spirit of freedom and patriotism on Independence Day. The event features flag hoisting, student performances, speeches, and cultural programs honoring our nation's heritage.",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2FIndependence%252F470022403_122130883118433731_8279656032820294838_n.jpg?alt=media&token=d9cfc97f-aafb-4138-8ccf-ae05c0c4cb03",
      photos: [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2F469644347_122130883244433731_8691785524092999267_n.jpg?alt=media&token=e05c63ce-1afd-49b6-939b-029926ad0fd4",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2F469707275_122130883226433731_5819026529528594709_n.jpg?alt=media&token=c39e8439-f808-47e8-b93f-59d34cb7fb77",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2F469735955_122130882920433731_1436850448782491085_n.jpg?alt=media&token=60bc7c13-bfde-4351-a4a9-5577767b1bb7",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2F469735979_122130882518433731_603116540969540913_n.jpg?alt=media&token=b6d2a560-d7b8-4bd6-aa2b-db406ad01ab5",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2F469791290_122130883130433731_3364541381940238718_n.jpg?alt=media&token=b7185e12-5e75-4f83-bdd6-594c847554bc",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2F469813009_122130883124433731_2388599307650095684_n.jpg?alt=media&token=81518439-42f9-47e5-b8f2-c3904ea77d12",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2F469886806_122130882884433731_7079417164523182232_n.jpg?alt=media&token=bca27dac-32be-4c29-91c9-1a37473ae058",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2FIndependence%252F470022403_122130883118433731_8279656032820294838_n.jpg?alt=media&token=d9cfc97f-aafb-4138-8ccf-ae05c0c4cb03",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Independence%2F470057140_122130882710433731_8209899445601171090_n.jpg?alt=media&token=1b79a8e0-d700-4ba6-b500-540e58152a50"
      ],
      requiresRegistration: false
    },
    {
      id: 6,
      title: "Krishna Janmashtami",
      date: "August 26, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "School Grounds",
      category: "Cultural",
      description: "Celebrate the birth of Lord Krishna with traditional dance, devotional music, Dahi Handi, and vibrant student performances. A joyful morning of devotion, color, and community spirit.",
      image:"https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469659296_122130903284433731_5563788249385920134_n.jpg?alt=media&token=bf18d382-77a3-4b4a-9291-33325696d55d",
      additionalInfo: "Students are encouraged to wear traditional attire. Prasad will be distributed after the event.",
      photos: [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469659296_122130903284433731_5563788249385920134_n.jpg?alt=media&token=bf18d382-77a3-4b4a-9291-33325696d55d",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469779185_122130903194433731_9007238363502430777_n.jpg?alt=media&token=ec21fdae-fa29-414c-8f6f-62a0f3d14677",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469779338_122130901808433731_6782066738803038706_n.jpg?alt=media&token=3d390718-043c-4e7a-801e-be2ac381c1cb",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469791285_122130903770433731_2121193518897067373_n.jpg?alt=media&token=ae35b499-ccd1-4534-98a9-53ae4fb00d03",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469869152_122130903494433731_3568951568583581742_n.jpg?alt=media&token=00e96abd-6805-4d47-b689-e879bb7782b0",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469869835_122130903440433731_5114515350331393602_n.jpg?alt=media&token=d1f8b301-5cbd-4274-9a07-03d584655bb7",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469880415_122130901298433731_7985749098803403837_n.jpg?alt=media&token=205be794-2d5a-4bcc-8fea-afc143fe26ba",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469936490_122130901562433731_8252048624124794998_n.jpg?alt=media&token=64688424-d923-42e4-b1c3-982de9147114",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Krishna%2F469957098_122130901760433731_4273391065164771506_n.jpg?alt=media&token=561dc0e8-1f02-4fcd-b94d-acd51d3ba05a"
      ],
      requiresRegistration: false
    },    
    {
      id: 7,
      title: "Maths Day Expo",
      date: "December 22, 2024",
      time: "90:00 AM - 12:00 PM",
      location: "Classrooms",
      category: "Career",
      description: "Explore the beauty and applications of mathematics through interactive exhibits, fun challenges, and engaging talks by educators and students alike.",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471792918_122133433940433731_6862902371911675303_n.jpg?alt=media&token=fa8128c5-8d71-4464-91cd-2fc4eba1efef",
      additionalInfo: "No registration required. Open to all students and parents. Puzzle zones and math games will be available throughout the day.",
      photos: [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471394243_122133433586433731_333649374389826004_n.jpg?alt=media&token=25b46222-8e75-4b96-9a4c-598aa20d74cc",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471396542_122133431930433731_1307712624310170964_n.jpg?alt=media&token=3ce194a7-453a-43eb-8088-9feb74e891c5",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471626985_122133432878433731_7580342206059383847_n.jpg?alt=media&token=eb365f59-3d4f-4be4-9e55-ccc9b8f45053",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471644058_122133432686433731_2263238564402487195_n.jpg?alt=media&token=197f1882-3cf5-400a-b67d-07f9b55fe4ef",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471701608_122133432470433731_9213285125984576220_n.jpg?alt=media&token=0e2b3205-e0ea-4c57-8cf1-7e177da50007",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471711026_122133431972433731_2612436896625293087_n.jpg?alt=media&token=a5c32ce3-0339-45a2-8c21-1ba77e92c207",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471723856_122133433772433731_2648389965030865313_n.jpg?alt=media&token=65952be3-b5db-44e7-bb71-949d2e82e161",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471792918_122133433940433731_6862902371911675303_n.jpg?alt=media&token=fa8128c5-8d71-4464-91cd-2fc4eba1efef",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Maths%2F471820572_122133432536433731_7399580315627755607_n.jpg?alt=media&token=ae069d81-255f-4d22-9984-b5caf9310c34"
      ],
      requiresRegistration: false
    },
    {
      id: 8,
      title: "Sports Day",
      date: "March 1, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "School Grounds",
      category: "Sports",
      description: "Celebrate athletic spirit and teamwork with an evening of exciting sports activities, friendly competitions, and community fun.",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F3.jpg?alt=media&token=f4c455f6-09b3-436a-9a54-773a4da69919",
      additionalInfo: "Families are welcome. Wear comfortable clothes. Refreshments and music available throughout the evening.",
      photos: [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F1.jpg?alt=media&token=e319e72b-1842-4c56-983f-8a6591b507e9",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F2.jpg?alt=media&token=32af2132-7e06-4eea-acb7-21e9fff784b3",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F3.jpg?alt=media&token=f4c455f6-09b3-436a-9a54-773a4da69919",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F4.jpg?alt=media&token=8b265849-e2cb-4889-8293-d9d2a629a3ed",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F5.jpg?alt=media&token=d036520e-0cd3-44bd-afdb-c51433638f4c",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F6.jpg?alt=media&token=9efd6db4-03a6-4f27-8435-2412561a1c77",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F7.jpg?alt=media&token=4f29232f-2b12-431d-879f-04ec04dac62e",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F8.jpg?alt=media&token=59dcbdb9-caee-487c-ab1d-ff39b20b9650",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F9.jpg?alt=media&token=fe5878ac-351e-4eb5-9450-535d2b00970b",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F10.jpg?alt=media&token=3b5c98d4-221a-480a-80b2-cdd755a1b46a",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F11.jpg?alt=media&token=09ecbb6d-712d-4567-8123-943f5ac73078",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F12.jpg?alt=media&token=6d2b4727-41e2-4119-b2a9-c59fb0e291a1",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F13.jpg?alt=media&token=55d2a595-cf80-4482-9bee-e56cf0572041",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F16.jpg?alt=media&token=859b88d0-2bd1-4f73-8c56-b546aced37b7",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F17.jpg?alt=media&token=5cbbc041-40b3-4f54-9ea7-6e39f08c2b27",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F18.jpg?alt=media&token=218d9d27-8ea8-476e-bba9-b80975c608f3",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F19.jpg?alt=media&token=d3e7f318-f9d0-45cc-9a0a-265fbf1da171",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Sports%2F20.jpg?alt=media&token=341b9577-4b7d-4610-84da-ffba3efd873c"
      ],
      requiresRegistration: false
    },
    {
      "id": 10,
      "title": "Sri Rama Navami",
      "date": "April 6, 2025",
      "time": "10:00 AM - 1:00 PM",
      "location": "School Grounds",
      "category": "Cultural",
      "description": "A grand celebration of Lord Rama's birth with bhajans, a Ramayana play, and a spectacular world record event featuring 1 Rama & Seeta, 10 characters, 100 Lava & Kusa, 1000 seconds of Kalyanam, and 10000 seconds of devotional dance. A cultural experience to remember!",
      "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F06.jpg?alt=media&token=dacfedde-5aac-4976-91da-f2cb5b28529e",  // Festive spiritual setting with Ramayana theme
      "additionalInfo": "Traditional attire is encouraged. Prasadam will be served after the event. Participants in the performance should report backstage by 9:30 AM.",
      "photos": [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F01.jpg?alt=media&token=1019ca4c-7d69-47a9-bb9c-e8ee8f715512",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F02.jpg?alt=media&token=0e7849b4-cd23-4d75-b096-b75f2030d594",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F03.jpg?alt=media&token=0f65de00-4876-46e3-9cd5-f0de48740a87",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F04.jpg?alt=media&token=9e10aaaa-f36d-45b9-b20a-58d699893124",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F05.jpg?alt=media&token=4621fc41-e87a-4eb0-b0bf-329cd610317c",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F06.jpg?alt=media&token=dacfedde-5aac-4976-91da-f2cb5b28529e",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F07.jpg?alt=media&token=14419164-d8f7-4123-9de3-ffd85f10c172",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F08.jpg?alt=media&token=bb7043c3-c807-42ee-af0b-e12ec201b9e9",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Ram%20Navami%2F09.jpg?alt=media&token=7fc7a292-da0d-4611-8acc-1f7d240b9976"
      ],
      "requiresRegistration": false
    },    
  ];
};

export default EventsList;