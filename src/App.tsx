import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Cookies from 'universal-cookie'
import PracticeQuiz from './views/PracticeQuiz'
import MockExamView from './views/MockExam'
import QuestionCatalogue from './views/QuestionCatalogue'
import Home from './views/Home'
// Questions
import quizQuestions from './data/quizQuestions'
import badenWurttembergQuestions from './data/badenWurttembergQuestions'
import bayernQuestions from './data/bayernQuestions'
import berlinQuestions from './data/berlinQuestions'
import brandenburgQuestions from './data/brandenburgQuestions'
import bremenQuestions from './data/bremenQuestions'
import hamburgQuestions from './data/hamburgQuestions'
import hessenQuestions from './data/hessenQuestions'
import mecklenburgVorpommernQuestions from './data/mecklenburgVorpommernQuestions'
import niedersachsenQuestions from './data/niedersachsenQuestions'
import nordrheinWestfalenQuestions from './data/nordrheinWestfalenQuestions'
import rheinlandPfalzQuestions from './data/rheinlandPfalzQuestions'
import saarlandQuestions from './data/saarlandQuestions'
import sachsenQuestions from './data/sachsenQuestions'
import sachsenAnhaltQuestions from './data/sachsenAnhaltQuestions'
import schleswigHolsteinQuestions from './data/schleswigHolsteinQuestions'
import thuringenQuestions from './data/thuringenQuestions'
// Images
import image_021 from './static/images/021.png'
import image_055 from './static/images/055.png'
import image_070 from './static/images/070.png'
import image_130 from './static/images/130.png'
import image_176 from './static/images/176.png'
import image_181 from './static/images/181.png'
import image_187 from './static/images/187.png'
import image_209 from './static/images/209.png'
import image_216 from './static/images/216.png'
import image_226 from './static/images/226.png'
import image_235 from './static/images/235.png'
import image_301 from './static/images/badenWurttemberg/301.png'
import image_308 from './static/images/badenWurttemberg/308.png'
import image_311 from './static/images/bayern/311.png'
import image_318 from './static/images/bayern/318.png'
import image_321 from './static/images/berlin/321.png'
import image_328 from './static/images/berlin/328.png'
import image_331 from './static/images/brandenburg/331.png'
import image_338 from './static/images/brandenburg/338.png'
import image_341 from './static/images/bremen/341.png'
import image_348 from './static/images/bremen/348.png'
import image_351 from './static/images/hamburg/351.png'
import image_358 from './static/images/hamburg/358.png'
import image_361 from './static/images/hessen/361.png'
import image_368 from './static/images/hessen/368.png'
import image_371 from './static/images/mecklenburgVorpommern/371.png'
import image_378 from './static/images/mecklenburgVorpommern/378.png'
import image_381 from './static/images/niedersachsen/381.png'
import image_388 from './static/images/niedersachsen/388.png'
import image_391 from './static/images/nordrheinWestfalen/391.png'
import image_398 from './static/images/nordrheinWestfalen/398.png'
import image_401 from './static/images/rheinlandPfalz/401.png'
import image_408 from './static/images/rheinlandPfalz/408.png'
import image_411 from './static/images/saarland/411.png'
import image_418 from './static/images/saarland/418.png'
import image_421 from './static/images/sachsen/421.png'
import image_428 from './static/images/sachsen/428.png'
import image_431 from './static/images/sachsenAnhalt/431.png'
import image_438 from './static/images/sachsenAnhalt/438.png'
import image_441 from './static/images/schleswigHolstein/441.png'
import image_448 from './static/images/schleswigHolstein/448.png'
import image_451 from './static/images/thuringen/451.png'
import image_458 from './static/images/thuringen/458.png'

const loadQuestions = (selectedLocation: string) => {
  let questions = quizQuestions

  if (selectedLocation !== 'none') {
    switch (selectedLocation) {
      case 'badenWurttemberg':
        questions = questions.concat(badenWurttembergQuestions)
        break
      case 'bayern':
        questions = questions.concat(bayernQuestions)
        break
      case 'berlin':
        questions = questions.concat(berlinQuestions)
        break
      case 'brandenburg':
        questions = questions.concat(brandenburgQuestions)
        break
      case 'bremen':
        questions = questions.concat(bremenQuestions)
        break
      case 'hamburg':
        questions = questions.concat(hamburgQuestions)
        break
      case 'hessen':
        questions = questions.concat(hessenQuestions)
        break
      case 'mecklenburgVorpommern':
        questions = questions.concat(mecklenburgVorpommernQuestions)
        break
      case 'niedersachsen':
        questions = questions.concat(niedersachsenQuestions)
        break
      case 'nordrheinWestfalen':
        questions = questions.concat(nordrheinWestfalenQuestions)
        break
      case 'rheinlandPfalz':
        questions = questions.concat(rheinlandPfalzQuestions)
        break
      case 'saarland':
        questions = questions.concat(saarlandQuestions)
        break
      case 'sachsen':
        questions = questions.concat(sachsenQuestions)
        break
      case 'sachsenAnhalt':
        questions = questions.concat(sachsenAnhaltQuestions)
        break
      case 'schleswigHolstein':
        questions = questions.concat(schleswigHolsteinQuestions)
        break
      case 'thuringen':
        questions = questions.concat(thuringenQuestions)
        break
      default:
      // do nothing
    }
  }
  return questions
}

function App() {
  const cookies = new Cookies()
  let location = cookies.get('selectedLocation') || 'none'
  const [selectedLocation, setSelectedLocation] = useState<string>(location)
  const [questions, setQuestions] = useState(loadQuestions(location))
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(location !== 'none' ? 310 : 300)

  const images = {
    image_021: image_021,
    image_055: image_055,
    image_070: image_070,
    image_130: image_130,
    image_176: image_176,
    image_181: image_181,
    image_187: image_187,
    image_209: image_209,
    image_216: image_216,
    image_226: image_226,
    image_235: image_235,
    image_301: image_301,
    image_308: image_308,
    image_311: image_311,
    image_318: image_318,
    image_321: image_321,
    image_328: image_328,
    image_331: image_331,
    image_338: image_338,
    image_341: image_341,
    image_348: image_348,
    image_351: image_351,
    image_358: image_358,
    image_361: image_361,
    image_368: image_368,
    image_371: image_371,
    image_378: image_378,
    image_381: image_381,
    image_388: image_388,
    image_391: image_391,
    image_398: image_398,
    image_401: image_401,
    image_408: image_408,
    image_411: image_411,
    image_418: image_418,
    image_421: image_421,
    image_428: image_428,
    image_431: image_431,
    image_438: image_438,
    image_441: image_441,
    image_448: image_448,
    image_451: image_451,
    image_458: image_458,
  }

  useEffect(() => {
    setQuestions(loadQuestions(selectedLocation))
    setNumberOfQuestions(selectedLocation !== 'none' ? 310 : 300)
  }, [selectedLocation])

  const restart = () => {
    cookies.remove('examQuestions', { path: '/' })
    cookies.remove('examProgress', { path: '/' })
    cookies.remove('progress', { path: '/' })
    cookies.remove('incorrect', { path: '/' })
  }

  const handleLocationChange = (event: any) => {
    event.preventDefault()
    const target = event.target
    restart()
    setSelectedLocation(target.value)
    const expires = new Date()
    expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000)
    expires.toUTCString()
    cookies.set('selectedLocation', target.value, { expires: expires, path: '/' })
  }

  return (
    <Switch>
      <Route exact path={'/trainieren'}>
        <PracticeQuiz questions={questions} totalNumberOfQuestions={numberOfQuestions} images={images} />
      </Route>
      <Route exact path={'/probe-prufung'}>
        <MockExamView questions={questions} totalNumberOfQuestions={numberOfQuestions} images={images} />
      </Route>
      <Route exact path={'/fragen-katalog'}>
        <QuestionCatalogue questions={questions} totalNumberOfQuestions={numberOfQuestions} images={images} />
      </Route>
      <Route path={'/'}>
        <Home selectedLocation={selectedLocation} handleLocationChange={handleLocationChange} />
      </Route>
    </Switch>
  )
}

export default App
