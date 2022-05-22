# BitLinkDemo

## SETUP

### OPEN TERMINAL

cd nextjs

bit install

cd ../base-ui

bit install

bit link --target ../nextjs

bit watch

### NEW TERMINAL

cd nextjs

npm run dev

OPEN localhost:3000

see error: 'TypeError: Cannot read property 'useContext' of null'. Why is this occurring? There seems to be an issue
when a component reference third layer dependencies, as this appears to work fine in the node js application if I just wish to render a simple component with no third layer dependencies.

Now stop the nodejs application and instead run "bit start". Observe the playground loads correctly, nextjs
components are rendered correctly along with their bit linked children.

When you run "bit start" from the nextjs application, the bit playground is able to start up and load all external 
dependencies successfully. I can browse the nextjs app components and the bit linked components perfectly. 
Even if I make a change to the component in base-ui, hot reloading works perfectly in the bit playground.
How is bit solving this problem and how I can apply it so that it works in the running nextjs application as well so
that I could test components in the nextjs project and also have changes reflected with hot reload?

If bit playground can do this, nextjs app should also be able to do this. Where is the disconnect here? Please help:(