import UnderlinedText from "@/components/decorators/UnderlinedText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "Graphic design Tips",
		description:
			"Get advice on graphics and motion design to always be up to date on all the latest developments in the field ",
		image: "/artist7.jpg",
	},
	{
		title: "3d modeling and animation",
		description:
			"workshops in 3D and 2D modeling and animation from the creation of objects, their rigs and finally their animations and final rendering.",
		image: "/baril2.jpg",
	},
	{
		title: "Web development Advices",
		description: "Support in fullstack web development from html css javascript, to popular frameworks like react js and react native and also in backend technologies like node js, express js...",
		image: "/gamedev.jpg",
	},
];

const featureList: string[] = [
	"Daily Typs",
	"Design Workshops",
	"Behind-the-Scenes Access",
	"Training Tutorials",
	"Advices",
	"Available to discuss 24/24",
];

// web development, graphic motion design, 3d modeling, 2d and 3d animation

const Features = () => {
  return (
    <section className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center text-gray-700">what do I offer for my followers?</h2>
      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map(feature=>(
          <div className="" key={feature}>
            <Badge className="text-sm" variant={"secondary"}>{feature}</Badge>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({title, description, image})=>(
          <Card key={title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
              <CardContent>{description}</CardContent>
              <CardFooter className="mt-auto">
                <img 
                src={image} 
                alt="Feature image" 
                className="rounded w-[250px] h-32 lg:w-[300px] mx-auto z-0 select-none pointer-events-none object-cover"
                />
              </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features;
