var Quiz = function(question, answer1, answer2, answer3, answer4, correct, info){
    this.question = question,
    this.answer1 = answer1,
    this.answer2 = answer2,
    this.answer3 = answer3,
    this.answer4 = answer4,
    this.correct = correct,
    this.info = info
};

var quiz1 = [
    //Question 1
    new Quiz(
        'By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?',
        'Television',
        'Radio',
        'Internet',
        'Newspapers',
        [1,1, 0, 0],
        'By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints.'
    ),
    //Question 2
    new Quiz(
        'Where is the official residence of the Prime Minister?',
        'London Tower',
        'Windsor Castle',
        'Buckingham Palace',
        '10 Downing Street',
        [0, 0, 0, 1],
        '10 Downing Street is the official office and home residence of the U.K. Prime Minister'
    ),
    //Question 3
    new Quiz(
        'Which industries were badly affected during the 1930\'s Great Depression?',
        'Vehicle Manufacturing',
        'Electrical Engineering',
        'Shipbuilding',
        'Agriculture',
        [0, 0, 1, 0],
        'One of the most affected industries during the 1930\'s Great Depression was shipbuilding'
    ),
    //Question 4
    new Quiz(
        'Cardiff is the capital city of:',
        'England',
        'Wales',
        'Ireland',
        'Scotland',
        [0, 1, 0, 0],
        'In 1905, Cardiff was made a city and proclaimed the Capital of Wales in 1955'
    ),
    //Question 5
    new Quiz(
        'The Crown Jewels are kept at',
        'Her Majesty’s Exchequer',
        'Buckingham Palace',
        'Tower of London',
        'Big Ben',
        [0, 0, 1, 0],
        'The Crown Jewels are kept at the Tower of London'
    ),
    //Question 6
    new Quiz(
        'The last successful foreign invasion of Britain that took place in 1066 was:',
        'Spanish Armada',
        'Caesar\'s invasion',
        'The Norman Conquest',
        'The Anglo-Saxon invasion',
        [0, 0, 1, 0],
        'The Norman conquest of England under William the Conqueror at the Battle of Hastings'
    ),
    //Question 7
    new Quiz(
        'Which of the following is a public holiday in Northern Ireland',
        'St George\'s day',
        'St Patrick\'s day',
        'St David\'s day',
        'St Andrew\'s day',
        [0, 1, 0, 0],
        'Only Scotland and Northern Ireland have their patron saint’s day as an official holiday (although in Scotland not all businesses and offices will close)'
    ),
    //Question 8
    new Quiz(
        'What is a bank holiday?',
        'A public holiday when banks and many other businesses are closed for the day',
        'A holiday when only banks are closed',
        'A holiday for public sector workers',
        'A holiday which everyone living in the U.K. must have',
        [1, 0, 0, 0],
        'In the United Kingdom and Ireland a bank holiday is a public holiday, when banks and many other businesses are closed for the day'
    ),
    //Question 9
    new Quiz(
        'How is a jury selected?',
        'From the electoral register in alphabetical order',
        'Randomly from the telephone directory',
        'From the postcode lottery',
        'Randomly from the electoral register',
        [0, 0, 0, 1],
        'The jurors’ names are selected from the electoral register. This is an automatic process, randomly done by a computer at a central office'
    ),
    //Question 10
    new Quiz(
        'William Shakespeare was the author of which play?',
        'The Clandestine Marriage',
        'A Midsummer Night’s dream',
        'The Daughter-in-Law',
        'The Wonder of Women',
        [0, 1, 0, 0],
        'A Midsummer Night\'s Dream is a comedy written by William Shakespeare in 1595/96'
    ),
    //Question 11
    new Quiz(
        'Northern Ireland has its own banknotes, where are they valid?',
        'Only in Northern Ireland',
        'Only in Northern Ireland and England',
        'Only in Northern Ireland and Scotland',
        'Everywhere in the UK',
        [0, 0, 0, 1],
        'Northern Ireland has its own banknotes, which are valid everywhere in the UK'
    ),
    //Question 12
    new Quiz(
        'Who is the author of Sherlock Holmes?',
        'Sir Arthur Conan Doyle',
        'Charles Dickens',
        'J. R. R. Tolkien',
        'George Orwell',
        [1, 0, 0, 0],
        'Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle'
    ),
    //Question 13
    new Quiz(
        'In which country is Snowdonia located?',
        'Scotland',
        'England',
        'Wales',
        'Northern Ireland',
        [0, 0, 1, 0],
        'Snowdonia is a region in northwest Wales concentrated around the mountains and glacial landforms of massive Snowdonia National Park'
    ),
    //Question 14
    new Quiz(
        'Which two houses form the UK Parliament?',
        'House of Lords',
        'House of the Royal Society',
        'House of Commons',
        'House of Cards',
        [1, 0, 1, 0],
        'The UK Parliament is composed of two houses; the House of Commons and the House of Lords.'
    ),
    //Question 15
    new Quiz(
        'Who was voted the Greatest Briton in 2002?',
        'Isambard Kingdom Brunel',
        'Winston Churchill',
        'Diana, Princess of Wales',
        'Charles Darwin',
        [0, 1, 0, 0],
        'A poll conducted by BBC in 2002 resulted in Winston Churchill being voted as the Greatest Briton'
    ),
    //Question 16
    new Quiz(
        'The National Citizen Service programme is: ',
        'Compulsory for 16 and 17-year-olds to join',
        'Optional for 16 and 17-year-olds to join',
        'An opportunity to enjoy outdoor activities, develop skills and take part in a community project',
        'Available for any age group',
        [0, 1, 1, 0],
        'The National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.'
    ),
    //Question 17
    new Quiz(
        'If you think someone is trying to persuade you to join an extremist or terrorist activity, who should you contact?',
        'Your local police force',
        'National Counter Terrorism Security Office',
        'Council Office',
        'The Home Office',
        [1, 0, 0, 0],
        'If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local police force.'
    ),
    //Question 18
    new Quiz(
        'In what year did Ireland become a republic?',
        '1925',
        '1939',
        '1949',
        '1927',
        [0, 0, 1, 0],
        'Ireland became a republic in 1949.'
    ),
    //Question 19
    new Quiz(
        'Women over the age of 30 were given the right to vote as a result of their contribution towards the war effort. Which war was that?',
        'The First World War',
        'The Second World War',
        'The Irish War of Independence',
        'The Great Northern War',
        [1, 0, 0, 0],
        'In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.'
    ),
    //Question 20
    new Quiz(
        'Where is the United Kingdom geographically located?',
        'North-West of Europe',
        'South-West of Europe',
        'North-East of Europe',
        'South-East of Europe',
        [1, 0, 0, 0],
        'The United Kingdom is a sovereign state located off the North-Western coast of continental Europe.'
    ),
    //Question 21
    new Quiz(
        'When were men and women given the right to vote at the age of 21?',
        '1918',
        '1926',
        '1928',
        '1930',
        [0, 0, 1, 0],
        'The 1928 \'Representation of the People\' Act widened suffrage by giving women electoral equality with men. It gave the vote to all women over 21 years old, regardless of property ownership. '
    ),
    //Question 22
    new Quiz(
        'Which of the following is TRUE regarding St Helena:',
        'is an independent state',
        'is part of the EU',
        'is part of the UK',
        'is a British overseas territory',
        [0, 0, 0, 1],
        'St Helena is a British overseas territory but is not part of the UK'
    ),
    //Question 23
    new Quiz(
        'What is the Home Secretary responsible for?',
        'Law',
        'Finance',
        'Education',
        'Policing',
        [0, 0, 0, 1],
        'The Home Secretary is responsible for crime, policing and immigration'
    ),
    //Question 24
    new Quiz(
        'Which of the following is a fundamental British value:',
        'Individual liberty',
        'Traditional Culture',
        'Harmony',
        'Self Development',
        [1, 0, 0, 0],
        'The Fundamental British Values are Democracy, Rule of Law, Respect and Tolerance, Individual Liberty.'
    ),
];

var quiz2 = [
    //Question 1
    new Quiz(
        'Which jubilee did Queen Elizabeth II celebrate in 2012?',
        'Diamond',
        'Platinum',
        'Golden',
        'Silver',
        [1, 0, 0, 0],
        'The Diamond Jubilee of Elizabeth II was a multinational celebration throughout 2012, that marked the 60th anniversary of the accession of Queen Elizabeth II on 6 February 1952'
    ),
    //Question 2
    new Quiz(
        'Who was the first man in the world to run 1 mile in under 4 minutes?',
        'Usain Bolt',
        'Mo Farah',
        'Steve Ovett',
        'Sir Roger Bannister',
        [0, 0, 0, 1],
        'Sir Roger Gilbert Bannister (23 March 1929 – 3 March 2018) was a British middle-distance athlete and neurologist who ran the first sub-4-minute mile'
    ),
    //Question 3
    new Quiz(
        'Which conservation charity works to preserve important buildings, coastline and countryside in the UK?',
        'Oxfam',
        'Wellcome Trust',
        'The National Trust',
        'The Salvation Army',
        [0, 0, 1, 0],
        'The National Trust is a charity that works to preserve and protect historic places and spaces for ever, for everyone'
    ),
    //Question 4
    new Quiz(
        'Scotland has its own banknotes and:',
        'Are only valid in Scotland',
        'Are valid everywhere in the UK',
        'Are only valid in Scotland and England',
        'Are only valid in Scotland, England and Wales',
        [0, 1, 0, 0],
        'Scotland has its own banknotes, which are valid everywhere in the UK'
    ),
    //Question 5
    new Quiz(
        'Who introduced the printing press into England and first used it to print books',
        'William Caxton',
        'Gilbert Kymer',
        'Robert Bale',
        'William Cornysh',
        [1, 0, 0, 0],
        'William Caxton was an English merchant, diplomat, writer and is thought to be the first person to introduce a printing press into England, in 1476, and as a printer was the first English retailer of printed books'
    ),
    //Question 6
    new Quiz(
        'Which sport originated from Scotland in the 15th century',
        'Football',
        'Rugby',
        'Golf',
        'Tennis',
        [0, 0, 1, 0],
        'Golf as we know it today originated from a game played on the eastern coast of Scotland in the Kingdom of Fife during the 15th century'
    ),
    //Question 7
    new Quiz(
        'Solicitors\' charges are usually based on:',
        'The nature of a case',
        'Time spent on a case',
        'The importance and complexity of a case',
        'The number of meetings they had with the client',
        [0, 1, 0, 0],
        'Solicitors’ charges are usually based on how much time they spend on a case.'
    ),
    //Question 8
    new Quiz(
        'What will you be given to vote before an election takes place?',
        'A letter from the Council',
        'A voting number',
        'A reference number',
        'A poll card',
        [0, 0, 0, 1],
        'The local Electoral Registration Office will send a poll card just before an election telling where and when to vote'
    ),
    //Question 9
    new Quiz(
        'What is Good Friday?',
        'The day Jesus Christ was born',
        'The day Jesus Christ was Crucified',
        'The first Friday after Easter',
        'The first Friday before Christmas',
        [0, 1, 0, 0],
        'The Friday before Easter Sunday, on which the Crucifixion of Christ is commemorated in the Christian Church. It is traditionally a day of fasting and penance'
    ),
    //Question 10
    new Quiz(
        'Which religious communities celebrate Diwali?',
        'Buddhists',
        'Hindus',
        'Jews',
        'Sikhs',
        [0, 1, 0, 1],
        'Diwali, the Hindu festival of lights, is the most popular of all the festivals. It is also an occasion for celebration by Sikhs'
    ),
    //Question 11
    new Quiz(
        'How many members does a jury have in England, Wales and Northern Ireland?',
        '7',
        '12',
        '16',
        '10',
        [0, 1, 0, 0],
        'In England, Wales and Northern Ireland a jury has 12 members, and in Scotland a jury has 15 members'
    ),
    //Question 12
    new Quiz(
        'Who is the patron Saint of Wales?',
        'St George',
        'St Patrick',
        'St David',
        'St Andrew',
        [0, 0, 1, 0],
        'Saint David was a Welsh bishop of Mynyw (now St Davids) during the 6th century; he was later regarded as a saint. He is the patron saint of Wales.'
    ),
    //Question 13
    new Quiz(
        'Which country was invaded by Germany in 1939?',
        'Poland',
        'Hungary',
        'France',
        'Britain',
        [1, 0, 0, 0],
        'In August of 1939, Nazi Germany and the Soviet Union signed a non-aggression treaty. One week later, Germany invaded Poland and World War II began'
    ),
    //Question 14
    new Quiz(
        'Who is the head of the Church of England?',
        'The Archbishop of Canterbury',
        'The Pope',
        'The Prime minister',
        'The Monarch',
        [0, 0, 0, 1],
        'The Archbishop of Canterbury is the most senior cleric, although the monarch is the supreme governor'
    ),
    //Question 15
    new Quiz(
        'When did women get the right to vote at the same age as men?',
        '1936',
        '1928',
        '1945',
        '1916',
        [0, 1, 0, 0],
        'It was not until the Equal Franchise Act of 1928 that women over 21 were able to vote and women finally achieved the same voting rights as men'
    ),
    //Question 16
    new Quiz(
        'Which two countries developed the Concorde, the world’s only supersonic commercial airliner?',
        'Britain',
        'Germany',
        'Spain',
        'France',
        [1, 0, 0, 1],
        'The Concorde is a British-French turbojet-powered supersonic passenger airliner that was operated from 1976 until 2003. It had a maximum speed over twice the speed of sound at Mach 2.04'
    ),
    //Question 17
    new Quiz(
        'What are the tour guides called that tell visitors stories about the Tower of London?',
        'The Queen\'s Guard',
        'Storytellers',
        'Beefeaters',
        'Blue Badge Tourist Guides',
        [0, 0, 1, 0],
        'The guards at the Tower of London are called Yeoman Warders. In principle they are responsible for looking after any prisoners at the Tower and safeguarding the British crown jewels, but in practice they act as tour guides and are a tourist attraction in their own right'
    ),
    //Question 18
    new Quiz(
        'When is The National Anthem ‘God save the queen’  played?',
        'In the presence of the Queen',
        'At important national occasions',
        'At events attended by the Queen or the Royal Family',
        'During holiday period',
        [0, 1, 1, 0],
        'The National Anthem is played at important national occasions and at events attended by the Queen or the Royal Family.'
    ),
    //Question 19
    new Quiz(
        'Where did the first farmers come from?',
        'North-East Europe',
        'South-East Europe',
        'North-West Europe',
        'South-West Europe',
        [0, 1, 0, 0],
        'The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from South-East Europe'
    ),
    //Question 20
    new Quiz(
        'Who fought in the War of the Roses?',
        'The House of York',
        'The House of Fraser',
        'The House of Lancaster',
        'The House of Birmingham',
        [1, 0, 1, 0],
        'The Wars of the Roses were a series of battles fought in medieval England from 1455 to 1485 between the House of Lancaster and the House of York'
    ),
    //Question 21
    new Quiz(
        'What did The Bill of Rights of 1689 confirm?',
        'The rights of Parliament and the limits of the king’s power',
        'The right to vote for men and women',
        'Freedom of Religion',
        'The Right to Bear Arms',
        [1, 0, 0, 0],
        'The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power.'
    ),
    //Question 22
    new Quiz(
        'Great Britain refers only to: ',
        'England and Scotland',
        'England, Wales and Scotland',
        'England and Wales',
        'England, Wales, Scotland and Northern Ireland',
        [0, 1, 0, 0],
        'Great Britain refers only to England, Wales and Scotland'
    ),
    //Question 23
    new Quiz(
        'Who was supported by clansmen from the Scottish highlands and raised and army in 1745?',
        'Robert the Bruce',
        'Oliver Cromwell',
        'Redcoats',
        'Bonnie Prince Charlie',
        [0, 0, 0, 1],
        'In 1745 there was another attempt to put a Stuart king back on the throne in place of George I’s son, George II. Charles Edward Stuart (Bonnie Prince Charlie), the grandson of James II, landed in Scotland. He was supported by clansmen from the Scottish highlands and raised and army'
    ),
    //Question 24
    new Quiz(
        'What is the long war called that English kings fought with France in the middle ages?',
        'First Barons\' War',
        'Seven Year\'s war',
        'The Battle of Hastings',
        'The Hundred Years War',
        [0, 0, 0, 1],
        'The Hundred Years\' War was a series of conflicts waged from 1337 to 1453 by the House of Plantagenet, rulers of the Kingdom of England, against the French House of Valois, over the right to rule the Kingdom of France'
    )
];

var quiz3 = [
    //Question 1
    new Quiz(
        'Who developed the radar?',
        'Alexander Fleming',
        'Sir Robert Watson-Watt',
        'G. H. Hardy',
        'Ada Lovelace',
        [0, 1, 0, 0],
        'Sir Robert Watson‐Watt, was the developer of the world\'s first practical radar system, which aided the repulsion of Germany in the Battle of Britain in 1940'
    ),
    //Question 2
    new Quiz(
        'What is the minimum age requirement to stand as an MP in the UK?',
        '18',
        '16',
        '21',
        '25',
        [1, 0, 0, 0],
        'People wishing to stand as an MP must be over 18 years of age, be a British citizen or citizen of a Commonwealth country or the Republic of Ireland.'
    ),
    //Question 3
    new Quiz(
        'Who was the leader of the suffragettes, the group that campaigned for women’s rights to vote?',
        'Charlotte Bronte',
        'Catherine Booth',
        'Elizabeth Fry',
        'Emmeline Pankhurst',
        [0, 0, 0, 1],
        'Emmeline Pankhurst (15 July 1858 – 14 June 1928) was a British political activist and leader of the British suffragette movement who helped women win the right to vote'
    ),
    //Question 4
    new Quiz(
        'When did the Black Death occur is Britain?',
        'In the Middle Ages',
        'In the Classical Age',
        'In the Age of Enlightenment',
        'In the Iron Age',
        [1, 0, 0, 0],
        'In the Middle Ages, 1348, a disease, probably a form of plague, came to Britain. This was known as the Black Death. One third of the population of England died and a similar proportion in Scotland and Wales'
    ),
    //Question 5
    new Quiz(
        'Why did the American colonies want independence from Britain',
        'Political instability',
        'Abuse against the Native Americans',
        'The British Government wanted to tax them',
        'Increased tension between Britain and France',
        [0, 0, 1, 0],
        'The King and Parliament believed they had the right to tax the colonies. They decided to require several kinds of taxes from the colonists to help pay for the French and Indian War'
    ),
    //Question 6
    new Quiz(
        'Select two of the three key roles that a school governor has?',
        'To put an end to difficult behavior',
        'Setting the strategic direction of the school',
        'Handing out awards for best students',
        'Monitoring and evaluating school performance',
        [0, 1, 0, 1],
        'The three key roles of a school governor are setting the strategic direction of the school, ensuring accountability and monitoring and evaluating school performance'
    ),
    //Question 7
    new Quiz(
        'Who were the supporters of King Charles I during the Civil War?',
        'Redcoats',
        'Jacobites',
        'Roundheads',
        'Cavaliers',
        [0, 0, 0, 1],
        'During the civil war between the king and Parliament the country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads).'
    ),
    //Question 8
    new Quiz(
        'When is Christmas Day celebrated?',
        '23th of December',
        '25th of December',
        '24th of December',
        '26th of December',
        [0, 1, 0, 0],
        'Christmas Day is celebrated on the 25th of December.'
    ),
    //Question 9
    new Quiz(
        'What type of literature are the Canterbury Tales?',
        'Poetry',
        'Prose',
        'Drama',
        'Folk tales',
        [1, 0, 0, 0],
        'Geoffrey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. This collection of poems is called The Canterbury Tales.'
    ),
    //Question 10
    new Quiz(
        'Who can make a complaint about the police by writing to the Chief Constable?',
        'MP\'s only',
        'Anyone',
        'Over 18 adults only',
        'Nobody',
        [0, 1, 0, 0],
        'Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved'
    ),
    //Question 11
    new Quiz(
        'When did the English defeat the Spanish Armada?',
        '1584',
        '1586',
        '1588',
        '1589',
        [0, 0, 1, 0],
        'The defeat of the Spanish Armada in 1588 has long been held as one of England\'s greatest military achievements, and a sign of the strength and spirit imparted to the country by the reign of Queen Elizabeth I'
    ),
    //Question 12
    new Quiz(
        'Who was the captain of the English football team that won the World Cup in 1966?',
        'Bobby Charlton',
        'Michael Owen',
        'Wayne Rooney',
        'Bobby Moore',
        [0, 0, 0, 1],
        'Bobby Moore was captain of England\'s World Cup-winning team in 1966 and widely regarded as one of the greatest defenders of all time'
    ),
    //Question 13
    new Quiz(
        'What is the title of the Queen’s eldest son, Prince Charles?',
        'Prince of Wales',
        'Duke of York',
        'Prince of Great Britain',
        'Prince of Essex',
        [1, 0, 0, 0],
        'Charles, Prince of Wales is the heir apparent to the British throne as the eldest child of Queen Elizabeth II. He has been Duke of Cornwall and Duke of Rothesay since 1952, and is the oldest and longest-serving heir apparent in British history'
    ),
    //Question 14
    new Quiz(
        'Who became Prime Minister and was an inspirational leader to the British people during WWII?',
        'Sir John Major',
        'Baroness Margaret Thatcher',
        'Clement Attlee',
        'Winston Churchill',
        [0, 0, 0, 1],
        'Winston Churchill was Britain\'s prime minister for most of World War II. He was famous for his speeches, and for his refusal to give in, even when things were going badly. For a time he was the most famous person in Britain. People all over the world know the name Winston Churchill'
    ),
    //Question 15
    new Quiz(
        'What is the Cenotaph?',
        'A chapel',
        'A church',
        'A war memorial',
        'A cemetery',
        [0, 0, 1, 0],
        'The Cenotaph is a war memorial on Whitehall in London, England.'
    ),
    //Question 16
    new Quiz(
        'Why did Henry VIII establish the church of England?',
        'To regain control from the Pope',
        'To divorce his first wife, Catherine of Aragon',
        'To establish a better religion in England',
        'To celebrate his wedding with Anne of Cleves',
        [0, 1, 0, 0],
        'To divorce his first wife, Henry needed the approval of the Pope. When the Pope refused, Henry established the church of England.'
    ),
    //Question 17
    new Quiz(
        'During the reign of Charles II parts of London were destroyed, what was the cause of this destruction?',
        'A fire',
        'A storm',
        'A flood',
        'Bombing',
        [1, 0, 0, 0],
        'During Charles II’s reign, a great fire destroyed much of the city, including many churches and St Paul’s Cathedral.'
    ),
    //Question 18
    new Quiz(
        'Which is the national flower of Wales?',
        'Daffodil',
        'Rose',
        'Thistle',
        'Flax',
        [1, 0, 0, 0],
        'The national flower of Wales is the daffodil, which is traditionally worn on St. David\'s Day'
    ),
    //Question 19
    new Quiz(
        'What are two responsibilities that you will have as a British citizen or permanent resident of the UK?',
        'To look after the area in which you live and the environment',
        'To look after yourself and your family',
        'To offer as a volunteer for various causes',
        'To work',
        [1, 1, 0, 0],
        'If you wish to be a permanent resident or citizen of the UK, you should: look after yourself and your family, look after the area in which you live and the environment, respect and obey the law, respect the rights of others, including their right to their own opinions and treat others with fairness.'
    ),
    //Question 20
    new Quiz(
        'Where is the Big Ben located?',
        'The Shard',
        'The houses of Parliament',
        'Kensington Palace',
        'Trafalgar Square',
        [0, 1, 0, 0],
        'Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster(The Houses of Parliament) in London and is usually extended to refer to both the clock and the clock tower'
    ),
    //Question 21
    new Quiz(
        'When walking your dog in a public place, you must ensure:',
        'To wear a dog muzzle',
        'To be on a leash',
        'To carry poop bags with you',
        'That your dog wears a collar showing the name and address of the owner',
        [0, 0, 0, 1],
        'All dogs in public places must wear a collar showing the name and address of the owner'
    ),
    //Question 22
    new Quiz(
        'Wich statements are true',
        'Northern Ireland has its own established church',
        'Northern Ireland has no established church',
        'Wales has its own established church',
        'Wales has no established church',
        [0, 1, 0, 1],
        'There is no established Church in Wales or Northern Ireland.'
    ),
    //Question 23
    new Quiz(
        'How is New Year’s Eve called in Scotland?',
        'Hogmanay',
        'Diwali',
        'Eid',
        'Spring Festival',
        [1, 0, 0, 0],
        'In Scotland, the 31st of December (New Year’s Eve) is called Hogmanay.'
    ),
    //Question 24
    new Quiz(
        'How often are general elections held in the UK?',
        'Every 2 years',
        'Every 5 years',
        'Every 6 years',
        'Every 4 years',
        [0, 1, 0, 0],
        'The Fixed-term Parliaments Act 2011 provides for general elections to be held on the first Thursday in May every Five Years'
    )
];

var quiz4 = [
    //Question 1
    new Quiz(
        'Who is the patron Saint of Scotland?',
        'St Patrick',
        'St Andrew',
        'St David',
        'St George',
        [0, 1, 0, 0],
        'The patron Saint of Scotland is St Andrew'
    ),
    //Question 2
    new Quiz(
        'Who was the first female Prime Minister of the UK?',
        'Theresa May',
        'Harriet Harman',
        'Jess Philips',
        'Margaret Thatcher',
        [0, 0, 0, 1],
        'Margaret Thatcher (1925-2013) was Britain’s first female prime minister (1979-90). She was known for her tough uncompromising, conservative political views, and became dubbed as ‘The Iron Lady’'
    ),
    //Question 3
    new Quiz(
        'Who chairs the debates at the House of Commons?',
        'The Prime Minister',
        'The Queen',
        'The Speaker',
        'Leader of the House of Commons ',
        [0, 0, 1, 0],
        'The Speaker of the House of Commons chairs debates in the Commons chamber. The holder of this office is an MP who has been elected to be Speaker by other Members of Parliament. During debates they keep order and call MPs to speak'
    ),
    //Question 4
    new Quiz(
        'What is the minimum age required to serve on a jury?',
        '16',
        '18',
        '21',
        '25',
        [0, 1, 0, 0],
        'Anyone who is on the electoral register and is aged 18 to 70 can be asked to serve on a jury'
    ),
    //Question 5
    new Quiz(
        'By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?',
        'Television',
        'Post',
        'Newspapers',
        'Radio',
        [1, 0, 0, 1],
        'By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints'
    ),
    //Question 6
    new Quiz(
        'Which of the following territories is a Crown dependency but is NOT part of the UK?',
        'Isle of Wight',
        'Bermuda',
        'Ireland',
        'The Channel Islands',
        [0, 0, 0, 1],
        'Channel Islands is a British overseas territory linked to the UK, but it is not part of it.'
    ),
    //Question 7
    new Quiz(
        'What did Sir Frank Whittle invent in the 1930s?',
        'Jet Engine',
        'Television',
        'Radio',
        'Tarmac',
        [1, 0, 0, 0],
        'Air Commodore Sir Frank Whittle was a British Royal Air Force air officer. He is credited with single-handedly inventing the turbojet engine'
    ),
    //Question 8
    new Quiz(
        'Who is the author of \'The Daffodils\'?',
        'Thomas Hardy',
        'William Wordsworth',
        'William Blake',
        'John Milton',
        [0, 1, 0, 0],
        'Inspire by nature, William Wordsworth wrote ‘The Daffodils’'
    ),
    //Question 9
    new Quiz(
        'Who was given the title of Lord Protector?',
        'Winston Churchill',
        'Queen Victoria',
        'King George II',
        'Oliver Cromwell',
        [0, 0, 0, 1],
        'Oliver Cromwell (25 April 1599 – 3 September 1658) was an English military and political leader. He served as Lord Protector of the Commonwealth of England, Scotland, and Ireland from 1653 until his death, acting simultaneously as head of state and head of government of the new republic'
    ),
    //Question 10
    new Quiz(
        'What are the 40 days before Easter called?',
        'Epiphany',
        'Pentecost',
        'Lent',
        'Advent',
        [0, 0, 1, 0],
        'Lent is a solemn religious observance in the Christian liturgical calendar that begins on Ash Wednesday and ends approximately six weeks later, before Easter Sunday'
    ),
    //Question 11
    new Quiz(
        'Are Church of England bishops allowed to sit in the House of Lords?',
        'Only the Archbishop of Canterbury ',
        'No  Church of England bishops are allowed ',
        'Several Church of England bishops are allowed ',
        'All Church of England members are allowed',
        [0, 0, 1, 0],
        'Some bishops are entitled to sit in the House of Lords. The Archbishop of Canterbury, the Archbishop of York, the Bishops of London, Durham and Winchester and 21 other bishops in order of seniority together form the Lords Spiritual'
    ),
    //Question 12
    new Quiz(
        'Who united the Anglo-Saxon kingdoms in England to defeat the Vikings?',
        'King Alfred the Great',
        'Edward the Elder',
        'Athelstan',
        'Edgar the Peaceful',
        [1, 0, 0, 0],
        'The Anglo-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings.'
    ),
    //Question 13
    new Quiz(
        'Magna Carta was written in what year?',
        '1214',
        '1215',
        '1216',
        '1212',
        [0, 1, 0, 0],
        'On the 19 June 1215 at Runnymede King John signed the Magna Carta(Great Charter). It was the first formal document stating that a King had to follow the laws of the land and it guaranteed the rights of individuals against the wishes of the King'
    ),
    //Question 14
    new Quiz(
        'Which court deals with minor criminal cases in England, Wales and Northern Ireland?',
        'Court of Appeal',
        'Coroners\' court',
        'Magistrates’ Court',
        'County Court',
        [0, 0, 1, 0],
        'In England and Wales, a magistrates\' court is a lower court which holds trials for summary offences and preliminary hearings for more serious ones. Some civil matters are also decided here, notably family proceedings'
    ),
    //Question 15
    new Quiz(
        'John Logie Baird developed the:',
        'ARPANET',
        'Radar',
        'Radio',
        'Television',
        [0, 0, 0, 1],
        'John Logie Baird (August 1888 – 14 June 1946) was a Scottish engineer, innovator, one of the inventors of the mechanical television, demonstrating the first working television system on 26 January 1926, and inventor of both the first publicly demonstrated colour television system, and the first purely electronic colour television picture tube'
    ),
    //Question 16
    new Quiz(
        'Which is the largest national park in England',
        'Northhumberland National Park',
        'Lake District National Park',
        'Peak district',
        'North York Moors',
        [0, 1, 0, 0],
        'The Lake District National Park at 2,292 square kilometres (885 sq mi) is the largest National Park in England and second largest in the United Kingdom after Scotland\'s Cairngorms National Park'
    ),
    //Question 17
    new Quiz(
        'In which London area are famous theatres located?',
        'Theatreland',
        'Baker Street',
        'Docklands',
        'Downing Street',
        [1, 0, 0, 0],
        'London Theatreland or also known as the West End, is the area of central London containing many of London\'s commercial Theatres'
    ),
    //Question 18
    new Quiz(
        'The last battle between Great Britain and France was called ...',
        'Battle of Taillebourg',
        'Battle of Bouvines',
        'Battle of Agincourt',
        'The Battle of Waterloo',
        [0, 0, 0, 1],
        'The Battle of Waterloo was fought on Sunday, 18 June 1815, near Waterloo in present-day Belgium, then part of the United Kingdom of the Netherlands. A French army under the command of Emperor Napoleon Bonaparte was defeated by two of the armies of the Seventh Coalition: a British-led Allied army under the command of the Duke of Wellington, and a Prussian army under the command of Gebhard Leberecht von Blücher, Prince of Wahlstatt. The battle marked the end of the Napoleonic Wars'
    ),
    //Question 19
    new Quiz(
        'Who was the leader of the Iceni tribe that fought against the Romans',
        'Boudica of the British Iceni',
        'Caratacus of the British Catuvellauni',
        'Brennus of the Gaulish Senones',
        'Vercingetorix of the Gaulish Arverni',
        [1, 0, 0, 0],
        'Boudica was a queen of the British Celtic Iceni tribe who led an uprising against the occupying forces of the Roman Empire in AD 60 or 61, and died shortly after its failure, having supposedly poisoned herself'
    ),
    //Question 20
    new Quiz(
        'What sporting event is the Grand National',
        'Cricket',
        'Horse Racing',
        'Formula One',
        'Rugby',
        [0, 1, 0, 0],
        'The Grand National is a National Hunt horse race held annually at Aintree Racecourse in Liverpool, England'
    ),
    //Question 21
    new Quiz(
        'Which battle is commemorated in the Bayeux Tapestry?',
        'The Battle of Sandwich',
        'The Battle of Bremule',
        'The Battle of Hastings',
        'The Battle of Lincoln',
        [0, 0, 1, 0],
        'The Bayeux Tapestry is an embroidered cloth nearly 70 metres (230 ft) long and 50 centimetres (20 in) tall, which depicts the events leading up to the Norman conquest of England concerning William, Duke of Normandy, and Harold, Earl of Wessex, later King of England, and culminating in the Battle of Hastings. It is thought to date to the 11th century, within a few years after the battle. It tells the story from the point of view of the conquering Normans'
    ),
    //Question 22
    new Quiz(
        'Where was Anne Boleyn, wife of King Henry VIII, executed?',
        'St Paul\'s Churchyard',
        'Tyburn',
        'Execution Dock',
        'Tower of London',
        [0, 0, 0, 1],
        'Anne Boleyn was not popular in the country and was accused of adultery. She was executed at the Tower of London'
    ),
    //Question 23
    new Quiz(
        'Racial crime and smoking in public places are examples of:',
        'Civil offences',
        'Indicent assault',
        'Criminal offences',
        'Summary offences',
        [0, 0, 1, 0],
        'Criminal offence is an act harmful not only to some individual but also to a community, society or the state. Such acts are forbidden and punishable by law. Racial crime and smoking in public places are examples of criminal offences'
    ),
    //Question 24
    new Quiz(
        'What type of character was Charlie Chaplin best known for?',
        'A Tramp',
        'A Factory Worker',
        'An Old Steward',
        'Station Porter',
        [1, 0, 0, 0],
        'The Tramp, also known as The Little Tramp, was British actor Charlie Chaplin\'s most memorable on-screen character and an icon in world cinema during the era of silent film. The Tramp is also the title of a silent film starring Chaplin, which Chaplin wrote and directed in 1915'
    )
];

var quiz5 = [
    //Question 1
    new Quiz(
        'Who can be prosecuted for violence against their partner, whether they are married or living together?',
        'Men only',
        'Women only',
        'Violence against one\'s partner is not a crime',
        'Both men and women',
        [0, 0, 0, 1],
        'In the UK, brutality and violence in the home is a serious crime. Anyone who is violent towards their partner, whether they are a man or a woman, married or living together, can be prosecuted.'
    ),
    //Question 2
    new Quiz(
        'The genre of Wallace & Gromit created by Nick Park is',
        'Comedy',
        'Animated film',
        'Musical',
        'Romance film',
        [0, 1, 0, 0],
        'Wallace and Gromit is a British clay animation comedy series created by Nick Park of Aardman Animations'
    ),
    //Question 3
    new Quiz(
        'Who is responsible for crime, policing and immigration?',
        'Ministry of Defence',
        'Ministry of Justice',
        'The Home Secretary',
        'Attorney General\'s Office',
        [0, 0, 1, 0],
        'The Home Office is a ministerial department of Her Majesty\'s Government of the United Kingdom, responsible for immigration, security and law and order'
    ),
    //Question 4
    new Quiz(
        'When was the Emancipation act passed, giving all slaves in the British Empire their freedom?',
        '1833',
        '1832',
        '1831',
        '1834',
        [1, 0, 0, 0],
        'In August 1833, the Slave Emancipation Act was passed, giving all slaves in the British empire their freedom, albeit after a set period of years. Plantation owners received compensation for the \'loss of their slaves\' in the form of a government grant set at £20,000,000'
    ),
    //Question 5
    new Quiz(
        'How are members of the House of Lords, known as peers,  appointed?',
        'By public vote',
        'By parliamentary vote',
        'Through hereditary titles',
        'By the Queen on the advice of the prime minister',
        [0, 0, 0, 1],
        'Members of the House of Lords are appointed by the Queen on the advice of the prime minister. Some non-party-political members are recommended by an independent body, the House of Lords Appointments Commission'
    ),
    //Question 6
    new Quiz(
        'What is the minimum age required to drive a motorcycle?',
        '16',
        '17',
        '18',
        '21',
        [1, 0, 0, 0],
        'In the UK, you must be at least 17 years to drive a car or motorcycle and you must have a driving licence to drive on public roads'
    ),
    //Question 7
    new Quiz(
        'Select two British pop music groups that were famous during the Swinging Sixties',
        'Bee Gees',
        'The Beatles',
        'The Rolling Stones',
        'Abba',
        [0, 1, 1, 0],
        'The decade of the 1960s was a period of significant social change. It was known as the ‘swinging sixties’. There was growth in British fashion, cinema and popular music. Two well-known pop music groups at the time were The Beatles and The Rolling Stones'
    ),
    //Question 8
    new Quiz(
        'What were the Irish people called that favoured complete independence from the UK? ',
        'Invincibles',
        'The Blueshirts',
        'Fenians',
        '32CSM',
        [0, 0, 1, 0],
        'Fenian was an umbrella term for the Fenian Brotherhood and Irish Republican Brotherhood, fraternal organisations dedicated to the establishment of an independent Irish Republic in the 19th and early 20th centuries'
    ),
    //Question 9
    new Quiz(
        'What religion did the Puritans follow?',
        'Protestant',
        'Orthodox',
        'Catholic',
        'Jewish',
        [1, 0, 0, 0],
        'The Puritans were English Reformed Protestants in the 16th and 17th centuries who sought to "purify" the Church of England from its "Catholic" practices, maintaining that the Church of England was only partially reformed'
    ),
    //Question 10
    new Quiz(
        'Select the forts that were part of Hadrian\'s wall',
        'Vindolanda',
        'Fort Burgoyne',
        'Vaison-la-Romaine',
        'Housesteads',
        [1, 0, 0, 1],
        'Hadrian\'s Wall was a defensive fortification in the Roman province of Britannia, begun in AD 122 in the reign of the emperor Hadrian. It ran from the banks of the River Tyne near the North Sea to the Solway Firth on the Irish Sea, and was the northern limit of the Roman Empire, immediately north of which were the lands of the northern Ancient Britons, including the Picts'
    ),
    //Question 11
    new Quiz(
        'The English Civil war of 1642 was fought between which two group of supporters?',
        'The Redcoats and Jacobites',
        'The Cavaliers and the Roundheads',
        'The House of York and the House of Lancaster',
        'Normans and Anglo-Saxons',
        [0, 1, 0, 0],
        'The English Civil Wars (1642-1651) stemmed from conflict between Charles I(Cavaliers) and Parliament(Roundheads). The first war was settled with Oliver Cromwell\'s victory for Parliamentary forces at the 1645 Battle of Naseby'
    ),
    //Question 12
    new Quiz(
        'What song is sung by people in the UK and other countries when they are celebrating the New Year?',
        'Ar Lan y Mor',
        'The Ash Grove',
        'Georgie',
        'Auld Lang Syne',
        [0, 0, 0, 1],
        'The song Auld Lang Syne, which is sung by people in the UK and other countries when they are celebrating the New Year (or Hogmanay as it is called in Scotland).'
    ),
    //Question 13
    new Quiz(
        'Who conducted a research that led to the first "splitting" of the atom?',
        'Ernest Lawrence',
        'Leo Szilard',
        'J. Robert Oppenheimer',
        'Ernest Rutherford',
        [0, 0, 0, 1],
        'Scientists led by Ernest Rutherford, working at Manchester and then Cambridge University, were the first to ‘split the atom’ and took part in the Manhattan Project in the United States, which developed the atomic bomb'
    ),
    //Question 14
    new Quiz(
        'What book depicts the society in England just after the Norman Conquest ',
        'Domesday Book',
        'Canterbury Tales',
        'Magna Carta',
        'Anglo-Saxon Chronicle',
        [1, 0, 0, 0],
        'William sent people all over England to draw up lists of all the towns and villages. The people who lived there, who owned the land and what animals they owned were also listed. This was called the Domesday Book. It still exists today and gives a picture of society in England just after the Norman Conquest'
    ),
    //Question 15
    new Quiz(
        'What did Alan Turing invent during the 1930\'s',
        'Vacuum cleaner',
        'Electrocardiogram',
        'Electric washing machine',
        'The Turing machine',
        [0, 0, 0, 1],
        'Alan Turing (1912-1954) invented the Turing machine as a theoretical model for exploring the limits of rules-based mathematics. This purely theoretical device became a powerful tool in the minds of mathematicians, and modern computers still follow many of its principles'
    ),
    //Question 16
    new Quiz(
        'Who deals with the Youth Court cases in England, Wales and Northern Ireland?',
        'A District Judge',
        'A specially trained magistrate',
        'Up to 3 specially trained magistrates',
        'A special lawyer',
        [1, 0, 1, 0],
        'The Youth Court is a type of magistrates\' court which deals with young people. Cases in the Youth Court are either dealt with by three magistrates or a single district judge, sitting alone. '
    ),
    //Question 17
    new Quiz(
        'In the 1972 Olympics, Mary Peters won a ...',
        'Bronze medal',
        'Silver medal',
        'Gold medal',
        'Cash prize',
        [0, 0, 1, 0],
        'Britain\'s Mary Peters wins pentathlon gold medal at the 1972 Munich Olympics'
    ),
    //Question 18
    new Quiz(
        'How can forced marriage be legally prevented?',
        'By obtaining a court order',
        'By speaking to the family involved',
        'There is no legal framework to prevent forced marriage',
        'By not consenting',
        [1, 0, 0, 0],
        'Court orders can be obtained to protect a person from being forced into a marriage, or to protect a person in a forced marriage.'
    ),
    //Question 19
    new Quiz(
        'When did the First World War officially end',
        'November 11, 1918, 12 a.m.',
        'November 11, 1917, 11 a.m.',
        'November 11, 1918, 11 a.m.',
        'November 11, 1918, 11 p.m.',
        [0, 0, 1, 0],
        'Also known as the Armistice of Compiègne from the place where it was signed, it came into force at 11 a.m. Paris time on 11 November 1918 ("the eleventh hour of the eleventh day of the eleventh month") and marked a victory for the Allies and a complete defeat for Germany'
    ),
    //Question 20
    new Quiz(
        'When did the first farmers arrive in Britain',
        '6000 years ago',
        '7000 years ago',
        '2000 years ago',
        'Before the Ice Age',
        [1, 0, 0, 0],
        'The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe. These people built houses, tombs and monuments on the land'
    ),
    //Question 21
    new Quiz(
        'Which high-grossing, successful film franchise was produced in Britain?',
        'X-Men',
        'Justice League',
        'Harry Potter',
        'The Hobbit',
        [0, 0, 1, 0],
        'Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and James Bond), have been produced in the UK.'
    ),
    //Question 22
    new Quiz(
        'On what occasion did England become a republic',
        'When Charles I was executed',
        'Just after the Norman Conquest',
        'When Henry VIII broke away from the Catholic Church',
        'When the 1534 Act of Supremacy was signed',
        [1, 0, 0, 0],
        'The king\'s army led by Charles I was defeated at the Battles of Marston Moor and Naseby. In 1649 Charles I was executed and England declared itself a republic, called the Commonwealth and it no longer had a monarch'
    ),
    //Question 23
    new Quiz(
        'In 1776, which British colonies declared their independence based on the principle that there should be no taxation without representation in the British Parliament?',
        'South African Colonies',
        'European Colonies',
        'Central America and the Caribbean',
        'North American Colonies',
        [0, 0, 0, 1],
        'In 1776, 13 American Colonies declared their independence, stating that people had a right to establish their own governments. The colonists eventually defeated the British Army and Britain recognised the colonies\' independence in 1783 '
    ),
    //Question 24
    new Quiz(
        'What languages were used across England during the Middle Ages?',
        'Gaelic',
        'Anglo-Saxon',
        'Norman French',
        'Pictish',
        [0, 1, 1, 0],
        'The Middle Ages saw the development of a national culture and identity. After the Norman Conquest, the king and his noblemen had spoken Norman French and the peasants had continued to speak Anglo-Saxon'
    )
];

var quiz6 = [
    //Question 1
    new Quiz(
        'How often are European parliamentary elections held?',
        'Every two years',
        'Every three years',
        'Every four years',
        'Every five years',
        [0, 0, 0, 1],
        'Elections to the European Parliament take place every five years by universal adult suffrage. 751 MEPs are elected to the European Parliament, which has been directly elected since 1979'
    ),
    //Question 2
    new Quiz(
        'Which of the following castles is located in Scotland?',
        'Harlech Castle',
        'Bodiam Castle',
        'Crathes Castle',
        'Alnwick Castle',
        [0, 0, 1, 0],
        'Crathes Castle is a 16th-century castle near Banchory in the Aberdeenshire region of Scotland set within a beautiful twentieth century Arts and Crafts garden'
    ),
    //Question 3
    new Quiz(
        'Where is the National Horseracing Museum located?',
        'Newmarket, Suffolk',
        'Ayr, Scotland',
        'Newcastle upon Tyne, North East England',
        'Colchester, Essex',
        [1, 0, 0, 0],
        'Palace House is the home of Great Britain’s National Heritage Centre of Horseracing and Sporting Art in the remaining part of Charles II\'s racing palace in Newmarket, Suffolk, England. It is home to the National Horseracing Museum, the British Sporting Art Trust and Retraining of Racehorses'
    ),
    //Question 4
    new Quiz(
        'Which country tried to conquer England sending a large fleet of ships in 1588?',
        'France',
        'The Netherlands',
        'Spain',
        'Portugal',
        [0, 0, 1, 0],
        'The Spanish Armada was a Spanish fleet of 130 ships that sailed from A Coruña in late May 1588, with the purpose of invading England, overthrowing Queen Elizabeth I and restoring Catholicism. The defeat of the Spanish Armada is considered one of England\'s greatest military achievements, and one that served to boost the monarch\'s popularity'
    ),
    //Question 5
    new Quiz(
        'Select the correct statement from the following:',
        'All shops in the UK close on Bank holidays',
        'All shops in the UK close on Sundays',
        'Most shops in the UK open seven days a week',
        'Overtime is not allowed on Sundays',
        [0, 0, 1, 0],
        'Most shops in the UK are open seven days a week, although trading hours on Sundays and public holidays are generally reduced'
    ),
    //Question 6
    new Quiz(
        'Over which country did James I reign before becoming King of Great Britain?',
        'Ireland',
        'England',
        'Wales',
        'Scotland',
        [0, 0, 0, 1],
        'James I, King of Great Britain (1566-1625) [James VI of Scotland and I of England] James I was the only child of Mary, Queen of Scots and Lord Darnley, both of whom were great-grandchildren of Henry VII. On the death of Elizabeth I in 1603, he moved south and became the first monarch of the Stuart dynasty in England'
    ),
    //Question 7
    new Quiz(
        'Who is the spiritual leader of the Church of England?',
        'The Archbishop of Canterbury',
        'The Monarch',
        'The prime minister',
        'The Archbishop of York',
        [1, 0, 0, 0],
        'The Archbishop of Canterbury is the senior bishop and principal leader of the Church of England, the symbolic head of the worldwide Anglican Communion and the diocesan bishop of the Diocese of Canterbury'
    ),
    //Question 8
    new Quiz(
        'Who was William Wilberforce?',
        'A sculptor',
        'An inventor',
        'A politician',
        'A writer',
        [0, 0, 1, 0],
        'William Wilberforce was an English politician known as a leader of the movement to stop the slave trade. A native of Kingston upon Hull, Yorkshire, he began his political career in 1780, eventually becoming a Member of Parliament for Yorkshire'
    ),
    //Question 9
    new Quiz(
        'At the Battle of Waterloo, Britain fought against ...',
        'France',
        'Belgium',
        'Prussia',
        'Spain',
        [1, 0, 0, 0],
        'In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo'
    ),
    //Question 10
    new Quiz(
        'Which of the following poets was inspired by nature?',
        'William Shakespeare',
        'Geoffrey Chaucer',
        'William Wordsworth',
        'Alexander Pope',
        [0, 0, 1, 0],
        'British poets, including William Wordsworth, were inspired by nature.'
    ),
    //Question 11
    new Quiz(
        'In the UK what is the minimum age for being able to vote in a general election?',
        '18',
        '16',
        '21',
        '20',
        [1, 0, 0, 0],
        'The present voting age of 18 was set in 1969 and (with a few exceptions) all UK-born and naturalised adult citizens have the right to vote'
    ),
    //Question 12
    new Quiz(
        'Which of the British Armed forces was used in the Battle of Britain?',
        'Special Forces',
        'Royal Air Force',
        'Royal Marines',
        'Royal Armoured Corps and Infantry',
        [0, 1, 0, 0],
        'The Battle of Britain was a military campaign of the Second World War, in which the Royal Air Force (RAF) defended the United Kingdom against large-scale attacks by Nazi Germany\'s air force, the Luftwaffe. It has been described as the first major military campaign fought entirely by air forces'
    ),
    //Question 13
    new Quiz(
        'Who became famous for his tramp character in silent movies?',
        'Gordon Hopkirk',
        'Evan Thomas',
        'Charlie Chaplin',
        'Henry Stuart',
        [0, 0, 1, 0],
        'The Tramp, also known as The Little Tramp, was British actor Charlie Chaplin\'s most memorable on-screen character and an icon in world cinema during the era of silent film. The Tramp is also the title of a silent film starring Chaplin, which Chaplin wrote and directed in 1915'
    ),
    //Question 14
    new Quiz(
        'Elizabeth I was a ...',
        'Catholic',
        'Protestant',
        'Puritan',
        'Nestorian',
        [0, 1, 0, 0],
        'One of her first actions as queen was the establishment of an English Protestant church, of which she became the Supreme Governor. This Elizabethan Religious Settlement was to evolve into the Church of England'
    ),
    //Question 15
    new Quiz(
        'Clansmen of which region in Scotland supported Bonnie Prince Charlie during the rebellion of the clans?',
        'Highlands',
        'Trossachs',
        'Lothian',
        'Fife',
        [1, 0, 0, 0],
        'Bonnie Prince Charlie raised support for his rising amongst the Highland clans which were devoted to the Jacobites'
    ),
    //Question 16
    new Quiz(
        'Where do Beefeaters serve as tour guides?',
        'The zoo',
        'Buckingham Palace',
        'British Museum',
        'The Tower of London',
        [0, 0, 0, 1],
        'The guards at the Tower of London are called Yeoman Warders(nicknamed Beefeaters). In principle they are responsible for looking after any prisoners at the Tower and safeguarding the British crown jewels, but in practice they act as tour guides and are a tourist attraction in their own right. There are twelve Yeomen Warders.'
    ),
    //Question 17
    new Quiz(
        'William Caxton was ...',
        'The designer of the Great Western Railway',
        'The author of \'On the Origin of Species\' ',
        'The first person in England to print books using a printing press',
        'The originator of universal gravitation and laws of classical mechanics and laws of motion',
        [0, 0, 1, 0],
        'William Caxton was an English merchant, diplomat, and writer. He is thought to be the first person to introduce a printing press into England, in 1476, and as a printer was the first English retailer of printed books'
    ),
    //Question 18
    new Quiz(
        'Who united the English kingdoms and defeated the Vikings?',
        'King Alfred the Great',
        'King Ecgberht',
        'King Harold',
        'King Edward the Confessor',
        [1, 0, 0, 0],
        'The Anglo-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings'
    ),
    //Question 19
    new Quiz(
        'How did Charles II manage to escape to Europe after his defeat in the Civil War?',
        'Hiding in the bushes',
        'Hiding in an oak tree',
        'Hiding in a cave',
        'He never escaped',
        [0, 1, 0, 0],
        'Charles II escaped from Worcester, famously hiding in an oak tree on one occasion, and eventually fled to Europe'
    ),
    //Question 20
    new Quiz(
        'How are some public holidays called?',
        'National Holidays',
        'Religious Holidays',
        'Public Holidays',
        'Bank Holidays',
        [0, 0, 0, 1],
        'There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day'
    ),
    //Question 21
    new Quiz(
        'Which of the following poems is about a group of people going on a pilgrimage?',
        'Piers Plowman',
        'The Canterbury Tales',
        'Book of the Civilized Man',
        'Sir Gawain and the Green Knight',
        [0, 1, 0, 0],
        'Geoffrey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. The people decided to tell each other stories on the journey, and the poems describe the travellers and some of the stories they told. This collection of poems is called The Canterbury Tales'
    ),
    //Question 22
    new Quiz(
        'Who did Boudica fight against as the leader of the Iceni tribe?',
        'Normands',
        'Anglo-Saxons',
        'Romans',
        'Picts',
        [0, 0, 1, 0],
        'Boudica was a queen of the British Celtic Iceni tribe who led an uprising against the occupying forces of the Roman Empire in AD 60 or 61, and died shortly after its failure, having supposedly poisoned herself'
    ),
    //Question 23
    new Quiz(
        'Which is the largest National Park in England?',
        'The Lake District',
        'Loch Lomond and the Trossachs National Park',
        'Dartmoor',
        'Yorkshire Dales',
        [1, 0, 0, 0],
        'The Lake District is a region and national park in Cumbria in northwest England. A popular vacation destination, it’s known for its glacial ribbon lakes, rugged fell mountains and historic literary associations'
    ),
    //Question 24
    new Quiz(
        'When is St George’s day celebrated?',
        '22nd April',
        '23rd April',
        '23rd May',
        '22nd May',
        [0, 1, 0, 0],
        'St George’s day, patron of England is celebrated on the 23rd of April.'
    )
];

var quiz7 = [
    //Question 1
    new Quiz(
        'In which year did Germany invade Poland?',
        '1945',
        '1918',
        '1939',
        '1940',
        [0, 0, 1, 0],
        'In August of 1939, Nazi Germany and the Soviet Union signed a non-aggression treaty. One week later, Germany invaded Poland and World War II began'
    ),
    //Question 2
    new Quiz(
        'Select the novel written by J.R.R. Tolkien that was voted the country\'s best loved novel in 2003',
        'Harry Potter',
        'The Lord of the Rings',
        'The Great Gatsby',
        'Catch-22',
        [0, 1, 0, 0],
        'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold'
    ),
    //Question 3
    new Quiz(
        'How would you best describe \'canvassing\'?',
        'Persuading people to vote for a political party',
        'Is a graphic-design tool website',
        'Outdoor painting',
        'It is related to art and design',
        [1, 0, 0, 0],
        'Members of political parties persuade people to vote for their candidates – for instance, by handing out leaflets in the street or by knocking on people’s doors and asking for their support. This is called ‘canvassing’.'
    ),
    //Question 4
    new Quiz(
        'Where in the British Empire did the Boer War(1899-1902) take place?',
        'New Zealand',
        'Tasmania',
        'North America',
        'South Africa',
        [0, 0, 0, 1],
        'The Boer War was fought between the British Empire and two Boer states, the South African Republic and the Orange Free State, over the Empire\'s influence in South Africa'
    ),
    //Question 5
    new Quiz(
        'Can a man be charged with rape by forcing his wife to have sex?',
        'No, there is no need for consent on both sides',
        'Only if there are physical traces of abuse',
        'Forcing a woman to have sex is considered rape, including in marriage',
        'Only if repetitive emotional abuse can be proven',
        [0, 0, 1, 0],
        'Any man who forces a woman to have sex, including a woman\'s husband, can be charged with rape. It is important for anyone facing domestic violence to get help as soon as possible. A solicitor or the Citizens Advice Bureau can explain the available options'
    ),
    //Question 6
    new Quiz(
        '\'Friends of the Earth\' is a charity for which cause?',
        'For young orphaned children',
        'For the environment',
        'For older people',
        'For animal welfare',
        [0, 1, 0, 0],
        'Friends of the Earth is an environmental campaigning community dedicated to the wellbeing and protection of the natural world and everyone in it'
    ),
    //Question 7
    new Quiz(
        'William of Orange was asked by Protestants to invade England and proclaim himself king. But, when William reached England, there was no resistance and he took over the throne. This event was later Known as:',
        'The \'Glorious Revolution\'',
        'The \'Glorious Takeover\'',
        'The \'Silent Revolution\'',
        'The \'Glorious Restoration\'',
        [1, 0, 0, 0],
        'William of Orange was asked by Protestants to invade England and proclaim himself king. When William reached England, there was no resistance and he took over the throne. This event was later called the ‘Glorious Revolution’'
    ),
    //Question 8
    new Quiz(
        'In which battle did Admiral Nelson die?',
        'Battle of the Saintes',
        'The Battle of the Nile',
        'The Battle of Jutland',
        'The Battle of Trafalgar',
        [0, 0, 0, 1],
        'On 21 October 1805, the Franco-Spanish fleet came out of port, and Nelson\'s fleet engaged them at the Battle of Trafalgar. The battle was Britain\'s greatest naval victory, but during the action, Nelson, aboard HMS Victory, was fatally wounded by a French sharpshooter'
    ),
    //Question 9
    new Quiz(
        'Select one of the following that represents an example of civil law',
        'To carry a knife for self defence',
        'Racial abuse',
        'Discrimination in the workplace',
        'To sell illegal drugs',
        [0, 0, 1, 0],
        'Discrimination in the workplace is an example of civil law. Civil law is quite different from criminal law. It\'s concerned with the rights and property of individual people or organisations, which may not always be protected by criminal laws. Civil law settles disputes between individuals and organisations, and it often involves compensation being awarded'
    ),
    //Question 10
    new Quiz(
        'Which of the following statements is TRUE:',
        'Mary Stuart (‘Mary, Queen of Scots’) was a Protestant',
        'Mary Stuart (‘Mary, Queen of Scots’) was a Catholic',
        'Mary Stuart (‘Mary, Queen of Scots’) was a Puritan',
        'Mary Stuart (‘Mary, Queen of Scots’) was an Atheist',
        [0, 1, 0, 0],
        'Mary had been brought up as a strict Catholic which put her at odds with the Protestant Elizabeth. Mary\'s father, James V of Scotland, died when she was one'
    ),
    //Question 11
    new Quiz(
        'What is the name of the period when new ideas about politics, philosophy and science were developed?',
        'The Enlightenment',
        'Roaring Twenties',
        'The Renaissance',
        'Reconstruction era',
        [1, 0, 0, 0],
        'During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the Enlightenment’'
    ),
    //Question 12
    new Quiz(
        'Select the patron Saint of Northern Ireland?',
        'St Patrick',
        'St David',
        'St Andrew',
        'St Augustine',
        [1, 0, 0, 0],
        'Saint Patrick is the patron saint of Ireland. He was a Christian missionary given credited with converting Ireland to Christianity in the AD 400s'
    ),
    //Question 13
    new Quiz(
        'By which methods can complaints be made against the police?',
        'Going to the police station',
        'Writing to your MP',
        'Writing to the Chief Constable',
        'Post on social media about your incident',
        [1, 0, 1, 0],
        'Anyone can make a complaint about the police by going to a police station or by writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland'
    ),
    //Question 14
    new Quiz(
        'Who was the father of Queen Elizabeth I?',
        'James VI and I',
        'Edward V',
        'Henry VIII',
        'James II',
        [0, 0, 1, 0],
        'Elizabeth was the daughter of Henry VIII and Anne Boleyn, his second wife, who was executed two-and-a-half years after Elizabeth\'s birth'
    ),
    //Question 15
    new Quiz(
        'Who was defeated by Oliver Cromwell during the Civil War and hid in an oak tree before escaping to Europe?',
        'Charles II',
        'Charles I',
        'Charles III',
        'Charles IV',
        [1, 0, 0, 0],
        'The Royal Oak is the English oak tree within which the future King Charles II of England hid to escape the Roundheads following the Battle of Worcester in 1651'
    ),
    //Question 16
    new Quiz(
        'On what occasion does the television and radio often play jokes until midday?',
        'Halloween',
        'April Fool’s Day',
        'Bonfire Night',
        'Shrove Tuesday or ‘Pancake Day’',
        [0, 1, 0, 0],
        'April Fool’s Day, 1 April, is a day when people play jokes on each other until midday. The television and newspapers often have stories that are April Fool jokes'
    ),
    //Question 17
    new Quiz(
        'Golf originates from which country?',
        'South Africa',
        'England',
        'India',
        'Scotland',
        [0, 0, 0, 1],
        'Golf originated from a game played on the eastern coast of Scotland, in an area close to the royal capital of Edinburgh. In those early days players would attempt to hit a pebble over sand dunes and around tracks using a bent stick or club'
    ),
    //Question 18
    new Quiz(
        'What type of church is the Church of Scotland?',
        'Presbyterian Church',
        'Roman Catholic Church',
        'Church of England',
        'Coptic Orthodox Church',
        [1, 0, 0, 0],
        'In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church. It is governed by ministers and elders. The chairperson of the General Assembly of the Church of Scotland is the Moderator'
    ),
    //Question 19
    new Quiz(
        'Where should you register if you want to become part of a jury?',
        'Council office',
        'The electoral register',
        'Post office',
        'Magistrates Courts',
        [0, 1, 0, 0],
        'People on the electoral register are randomly selected to serve on a jury. If you wish to be considered to be part of a jury you have to be on the electoral register and be between 18 to 70 years old.'
    ),
    //Question 20
    new Quiz(
        'Select the following locations that are NOT part of the UK',
        'St Helena',
        'Falkland Islands',
        'Isle of Wight',
        'Isle of Skye',
        [1, 1, 0, 0],
        'St Helena and the Falkland Islands are British overseas territories, they are linked to the UK but are not part of it'
    ),
    //Question 21
    new Quiz(
        'Select two of the following that are part of the fundamental principles of British life',
        'Personal financial gain',
        'Renunciation',
        'Democracy',
        'The rule of law',
        [0, 0, 1, 1],
        'The fundamental principles of British life include: democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs and participation in community life'
    ),
    //Question 22
    new Quiz(
        'The Eden Project is located in:',
        'Cornwall',
        'Kent',
        'Hampshire',
        'Oxford',
        [1, 0, 0, 0],
        'The Eden Project is a popular visitor attraction in Cornwall, South West England, UK. Inside the two biomes are plants that are collected from many diverse climates and environments'
    ),
    //Question 23
    new Quiz(
        'Select the valid coins that are in circulation in the UK',
        '10p',
        '25p',
        '15p',
        '50p',
        [1, 0, 0, 1],
        'There are no 25p and 15p coins in the UK currency'
    ),
    //Question 24
    new Quiz(
        'When is Easter celebrated?',
        'From November to December',
        'August',
        'March or April',
        'June or July',
        [0, 0, 1, 0],
        'In Western Christianity, using the Gregorian calendar, Easter always falls on a Sunday between 22 March and 25 April inclusive, within about seven days after the astronomical full moon. The following day, Easter Monday, is a legal holiday in many countries with predominantly Christian traditions'
    )
];

var quiz8 = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];

var quiz9 = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];

var quiz10 = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];

var quiz11 = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];

var quiz12 = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];

var quiz13 = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];

var quiz14 = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];

var quiz15 = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];

/***************************
 //Use this template to create new quizzes
var templateQuiz = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];
***************************/


//quiz controller
var model = (function(){
    return {
        //storing the count of the quizzes
        counter: 0,

        //store score points
        score: 0,

        //set timer value
        timerCount: 0,
        timeRemaining: 2700,

        //storing the quiz array
        quizArray: [],

        //storing the validation pattern
        quizValidationArray: [],

        //refresh page
        refresh: function() {
            location.reload();
        },

        //check if element has class function
        hasClass: function(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
        },
        /*
       example:
       var elem = document.getElementById('elementID');
       hasClass(elem, 'active'); OUTPUT: true or false
       */

        //shortcut function for getting elements by id
        getID: function(id) {
            return document.getElementById(id);
        },

        //loop through the quiz array and push into a global array
        getArray: function(array) {
            for (var i = 0; i < array.length; i++) {
                this.quizArray.push(array[i]);
            }
        },

        scorePercentage: function() {
            var totalQuestions = this.quizArray.length;
            var totalScore = this.score;
            var percentageScore = Math.round((totalScore / totalQuestions) * 100);
            return percentageScore;
        },

        countDownTimer: function() {
            var renderElem = this.getID('count-down');
            renderElem.innerHTML = convert(model.timeRemaining - model.timerCount);

            //formats any single digit to double digits
            function format(n) {
                return (n < 10 ? '0' : '') + n;
            }

            //converts 60 seconds to 1 minute
            function convert(sec) {
                var minutes = Math.floor( sec / 60);
                var seconds = sec % 60;
                return `${format(minutes)} min : ${format(seconds)} sec`;
            }

            //set the interval for every 1 second
            var interval = setInterval(timing, 1000);

            //increment timer
            function timing() {
                model.timerCount++;
                renderElem.innerHTML = convert(model.timeRemaining - model.timerCount);
                if(model.timeRemaining === model.timerCount) {
                    model.getID('quiz-layout').style.display = 'none';
                    model.getID('finished').style.display = 'block';
                    model.getID('final-score').innerHTML =
                        `<h3 class="red bold">Failed! Time is up ...</h3> 
                         <p>The time limit is  <span class="bold green">45 minutes</span></p>
                         <p>So far you scored <span class="bold">${model.score}</span>  
                         out of <span class="bold">${model.quizArray.length}</span> 
                         (<span class="red bold">${model.scorePercentage()}%</span>)</p>`;
                    model.timerCount = 0;
                    clearInterval(interval);
                }
            }
        },
    }

})();

//user interface controller
var view = (function (){

    //access dom elements
    var elem = {
        answers: model.getID('answers'),
        answersInput: this.answers.getElementsByTagName('input'),
        answersLabel: this.answers.getElementsByTagName('label'),
        question: model.getID('question'),
        answer1: model.getID('answer1'),
        answer2: model.getID('answer2'),
        answer3: model.getID('answer3'),
        answer4: model.getID('answer4'),
        info: model.getID('info'),
        submit: model.getID('submit-btn'),
        next: model.getID('submit-btn-next'),
        finished: model.getID('finished'),
        quizLayout: model.getID('quiz-layout'),
        finishedBtn: model.getID('finished-btn'),
        finalScore: model.getID('final-score'),
        quizCount: model.getID('quiz-count')
    };


    var input = elem.answersInput;

    //counters to help validate user answers
    var selected = 0;
    var wrong = 0;
    var correctCount = 0;

    //function for resetting user validation counters
    var resetCounter = function() {
        selected = 0;
        wrong = 0;
        correctCount = 0;
    };

    //check if user selection is correct then increment correct answer count
    var checkSelected = function() {
        for(var i=0; i < input.length; i++){
            //assigning input elements parent to a variable
            var parentNode1 = input[i].parentNode;
            var parentNode2 = parentNode1.parentNode;
            //style the choices according to validity
            input[i].value === '1' ? parentNode2.classList.add('green') : parentNode2.classList.add('red');
            //quiz logic
            if(input[i].value === '0' && input[i].checked){
                wrong++;
            }
            if(input[i].value === '1' && input[i].checked) {
                selected++;
            }
            //disable check buttons once the validation process has gone through
            input[i].disabled = true;
        }
    };

    //check how many correct answers are supposed to be and increment the count
    var checkCorrectNo = function() {
        for(var i=0; i < model.quizArray[model.counter].correct.length; i++)  {
            if(model.quizArray[model.counter].correct[i] === 1) {
                correctCount++;
            }
        }
    };

    //make sure only the correct amount of answers are displayed
    var controlQuiz = function() {
        if(model.counter >= model.quizArray.length - 1) {
            elem.quizLayout.style.display = "none";
            elem.finished.style.display = "block";
        }
    };

    //toggle between submit and continue(next) button
    var toggleButtons = function() {
        if (model.hasClass(elem.submit, 'show')) {
            elem.submit.classList.toggle('show');
            elem.submit.classList.toggle('hide');
            elem.next.classList.toggle('show');
            elem.next.classList.toggle('hide');
        } else if (model.hasClass(elem.next, 'show')) {
            elem.submit.classList.toggle('show');
            elem.submit.classList.toggle('hide');
            elem.next.classList.toggle('show');
            elem.next.classList.toggle('hide');

        }
    };

    //when this function is called it will display final results tot he DOM
    var renderScore = function() {
        var percentageScore = model.scorePercentage();
        if( percentageScore >= 75) {
            return elem.finalScore.innerHTML =
                `<h3 class="green bold">Passed</h3>
                <p>Your scored <span class="bold">${model.score}</span> out of 
                <span class="bold">${model.quizArray.length}</span> 
                (<span class="green bold">${percentageScore}%</span>)</p>`;
        }  else {
            return elem.finalScore.innerHTML =
                `<h3 class="red bold">Failed!</h3> 
                <p>The pass rate is <span class="bold green">75%</span> or higher</p>
                <p>You scored <span class="bold">${model.score}</span>  
                out of <span class="bold">${model.quizArray.length}</span> 
                (<span class="red bold">${percentageScore}%</span>)</p>`;
        }
    };

    return {

        //render the quiz to the dom with appropriate logic
        generateQuiz: function(chooseQuiz) {
            //initiate quiz array
            model.getArray(chooseQuiz);

            //render the questions and answers into the appropriate elements
            function render() {
                elem.quizCount.innerHTML = `Question ${model.counter + 1} of ${model.quizArray.length}`;

                elem.question.innerHTML = `${model.quizArray[model.counter].question}`;
                elem.answer1.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[0]}">
                            ${model.quizArray[model.counter].answer1}
                        </label>
                    </div>`;
                elem.answer2.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[1]}">
                            ${model.quizArray[model.counter].answer2} 
                        </label>
                    </di v>`;
                elem.answer3.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[2]}">
                            ${model.quizArray[model.counter].answer3}
                        </label>
                    </div>`;
                elem.answer4.innerHTML =
                    ` <div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[3]}">
                            ${model.quizArray[model.counter].answer4}
                        </label>
                    </div>`;
            };
            //render first question
            render();

            //move to next question while validating the answer
            elem.submit.addEventListener("click", function(){
                //console.log(`good counter is: ${selected}`);
                //console.log(`wrong counter is: ${wrong}`);
                //console.log(`correct counter is: ${correctCount}`);

                //initiate validation process
                checkSelected();
                checkCorrectNo();

                if(selected === correctCount && selected !== 0 && wrong === 0) {
                    resetCounter();
                    model.score++;

                    //render question related information
                    elem.info.innerHTML =
                        `<h2 class="green bold">Correct</h2>
                         <p>${model.quizArray[model.counter].info}</p>`;

                    toggleButtons();
                    renderScore();
                } else {
                    //render question related information
                    elem.info.innerHTML =
                        `<h2 class="red bold">Incorrect</h2>
                         <p>${model.quizArray[model.counter].info}</p>`;
                    renderScore();
                    toggleButtons();
                    resetCounter();
                }
                //render only available amount of questions/quiz
                console.log(`counter is: ${model.counter}`);
                console.log(`score is: ${model.score}`);

            });

            //this button will go to the next question without incrementing the score
            elem.next.addEventListener("click", function() {
                elem.info.innerHTML = '';
                controlQuiz();
                resetCounter();
                model.counter++;
                toggleButtons();
                render();
            });
        },

        //refresh page added for finish button
        finished: function() {
            elem.finishedBtn.addEventListener('click', model.refresh);
        },

    }
})();

//global controller
var controller = (function(model, view){

    var initiateQuiz = function(quiz) {
        var quizModal = document.getElementById('quiz');
        var closeButton = document.getElementById('close');
        closeButton.onclick = function() {
            location.reload();
        };
        view.generateQuiz(quiz);
        quizModal.style.display = "block";
    };

    var renderQuizOnClick = function() {


        model.getID('btn-1').addEventListener('click', function() {
            initiateQuiz(quiz1);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 1';
            model.getID('finished-btn').innerHTML += ' 1';
        });

        model.getID('btn-2').addEventListener('click', function() {
            initiateQuiz(quiz2);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 2';
            model.getID('finished-btn').innerHTML += ' 2';
        });

        model.getID('btn-3').addEventListener('click', function() {
            initiateQuiz(quiz3);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 3';
            model.getID('finished-btn').innerHTML += ' 3';
        });

        model.getID('btn-4').addEventListener('click', function() {
            initiateQuiz(quiz4);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 4';
            model.getID('finished-btn').innerHTML += ' 4';
        });

        model.getID('btn-5').addEventListener('click', function() {
            initiateQuiz(quiz5);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 5';
            model.getID('finished-btn').innerHTML += ' 5';
        });

        model.getID('btn-6').addEventListener('click', function() {
            initiateQuiz(quiz6);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 6';
            model.getID('finished-btn').innerHTML += ' 6';
        });

        model.getID('btn-7').addEventListener('click', function() {
            initiateQuiz(quiz7);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 7';
            model.getID('finished-btn').innerHTML += ' 7';
        });

        model.getID('btn-8').addEventListener('click', function() {
            initiateQuiz(quiz8);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 8';
            model.getID('finished-btn').innerHTML += ' 8';
        });

        model.getID('btn-9').addEventListener('click', function() {
            initiateQuiz(quiz9);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 9';
            model.getID('finished-btn').innerHTML += ' 9';
        });

        model.getID('btn-10').addEventListener('click', function() {
            initiateQuiz(quiz10);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 10';
            model.getID('finished-btn').innerHTML += ' 10';
        });

        model.getID('btn-11').addEventListener('click', function() {
            initiateQuiz(quiz11);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 11';
            model.getID('finished-btn').innerHTML += ' 11';
        });

        model.getID('btn-12').addEventListener('click', function() {
            initiateQuiz(quiz12);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 12';
            model.getID('finished-btn').innerHTML += ' 12';
        });

        model.getID('btn-13').addEventListener('click', function() {
            initiateQuiz(quiz13);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 13';
            model.getID('finished-btn').innerHTML += ' 13';
        });

        model.getID('btn-14').addEventListener('click', function() {
            initiateQuiz(quiz14);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 14';
            model.getID('finished-btn').innerHTML += ' 14';
        });

        model.getID('btn-15').addEventListener('click', function() {
            initiateQuiz(quiz15);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 15';
            model.getID('finished-btn').innerHTML += ' 15';
        });
    };


    return {
        init: function(){
            renderQuizOnClick();
            view.finished();
        }
    }

})(model,view);

controller.init();