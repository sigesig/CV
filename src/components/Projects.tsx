import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Re<span className="text-teal-600">c</span>ent Pro<span className="text-teal-600">j</span>ects
        </h2>
        
        <div className="space-y-16">
          {/* Project 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Electronic Voting System</h3>
              <h4 className="text-lg text-teal-600 mb-4">A centralized electronic voting system using ElGamal encryption for cryptographic security</h4>
              <p className="text-gray-600">
                For my bachelor project, I developed a system for doing electronic voting safely in Golang. 
                Using cryptographic techniques like ElGamal encryption scheme and secret sharing scheme to ensure confidentiality.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/img/projects_imgs/evoting.jpg" alt="E-voting system" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Discord Bot and Monitoring</h3>
              <h4 className="text-lg text-teal-600 mb-4">Discord Bot for friends to play music etc.</h4>
              <p className="text-gray-600">
                I developed a fully containerized Discord Bot using Typescript for me and my friends to use. 
                I implemented a music player into the bot, by fetching music using YouTube. With support for Spotify links 
                by fetching metadata using the Spotify API, then search YouTube with the fetched data. The bot has a full 
                containerized monitoring system, using Prometheus and Prometheus exporters, Grafana, and with a Discord bot 
                that fetch data from Discord about messages sent etc.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/img/projects_imgs/discord-bot.png" alt="Discord bot" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Battery testing device</h3>
              <h4 className="text-lg text-teal-600 mb-4">A device for testing the quality of batteries in wireless speakers</h4>
              <p className="text-gray-600">
                During my time at Libratone A/S, I developed a device for testing the battery capacity of speakers 
                for use in the service and the development department. Created using an Arduino development board 
                by measuring the current running through a shunt resistor, and a screen for the UI.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/img/projects_imgs/battery-test.jpg" alt="Battery tester" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Omnidirectional RC car</h3>
              <h4 className="text-lg text-teal-600 mb-4">Omnidirectional RC car with an Arduino and Mecanum wheels</h4>
              <p className="text-gray-600">
                As a final exam project at HTX, I created an RC car that used Mecanum wheels, and an Arduino 
                development board as a brain. Control of the robot was done with Bluetooth through an app 
                I developed for the purpose.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/img/projects_imgs/HTX.jpg" alt="Omnidirectional RC car" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Project 5 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Measuring and handling indoor climate</h3>
              <h4 className="text-lg text-teal-600 mb-4">Using IoT, Cloud computing & Control theory</h4>
              <p className="text-gray-600">
                I have developed an IoT system that can keep track of the indoor climate of a room, and regulate 
                it with a fan. The system is connected to a web portal, such that users can monitor their indoor 
                climate, and take action when needed. The system consists of a Raspberry Pi connected to a set of 
                different sensors which together can measure temperature, humidity, pressure, gas, air quality, 
                and light level. The Raspberry is also connected to an actuator, a fan for ventilation.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/img/projects_imgs/indoor-climate.jpg" alt="Indoor climate control system" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Project 6 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Blendedspaces for HMDs and phones</h3>
              <h4 className="text-lg text-teal-600 mb-4">Using AR, Unity, Oculus Quest 2, and C#</h4>
              <p className="text-gray-600">
                This is a system that connects head-mounted displays and mobile phones to the same blended space. 
                Allowing them to interact with shared objects using a set of gestures. The system consists of two 
                Unity applications, one made for mobile phone users and one for an Oculus Quest 2. In order to 
                support Augmented Reality it relies on Unity&apos;s AR Foundation and for connecting the two applications 
                it uses the Photon Engine to power the networking.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/img/projects_imgs/blendedspaces.png" alt="Blended spaces sketch" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Project 7 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Deep learning for Medical Image Segmentation</h3>
              <h4 className="text-lg text-teal-600 mb-4">Using Python and the U-Net Model for detecting Pneumonia</h4>
              <p className="text-gray-600">
                Developed and trained a deep learning model to predict and segment potential pneumonia infections 
                in X-ray images. The U-net model was trained using X-ray images with bounding boxes describing 
                where the pneumonia is located.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/img/projects_imgs/Deeplearning.png" alt="Deep learning model results" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}