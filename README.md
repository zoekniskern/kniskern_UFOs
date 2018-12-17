# kniskern_UFOs
Data visualization of UFO siting dataset

#Project Documentation
1. The original dataset was over 80,000 rows. Using OpenRefine and some choices on which data I could remove for the sake of efficiency in loading speed, my final set is about 13,000.
2. I was definitely interested in the locations of the sightings. My secondary interest had been in the shape, and although I was able to properly nest the data and intended to create linked small multiples, I was not able to achieve this. Instead I showed how many sightings were in each country both visually and numerically.
3. Marks on the map were x and y position. To distinguish the data by year I used color and a slightly increased area to draw attention. I used the same channels to show hover.
4. The development process was tricky, but I also did not dedicate as much time as I would have needed to accomplish everything I was interested in. I spent way too long trying to figure out how to read in both a json file and a csv.
5. I enjoy data visualization and would like to continue this project to incorperate some of the elements I did not get to.



# Things I'm not doing in favor of finishing more
1. Setting bounds on the pan and scroll
3. Showing only the points of each year rather than using color to differentiate
2. Veroni grid - too many points
3. Small multiples charts http://jonathansoma.com/tutorials/d3/small-multiples/
4. Linking bar graph to year selector


#dataset
https://www.kaggle.com/hakeemtfrank/ufo-sightings-data-exploration/data

#saving as story resources
https://www.theguardian.com/science/2018/oct/15/ufo-sightings-may-be-falling-but-congress-is-still-paying-attention
https://cosmosmagazine.com/space/why-we-should-take-ufo-sightings-seriously
https://viterbischool.usc.edu/news/2018/07/data-crunching-class-looks-to-the-skies-to-explore-ufo-sightings/
https://www.newsweek.com/science-can-explain-ufos-sighting-alien-abductions-550149
http://curious.astro.cornell.edu/about-us/132-observational-astronomy/seti-and-extraterrestrial-life/ufos/798-why-do-so-many-of-the-world-s-ufo-sightings-happen-in-america-beginner