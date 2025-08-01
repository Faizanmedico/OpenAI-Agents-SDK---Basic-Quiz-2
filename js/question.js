class Question {
    constructor(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer){
        return answer === this.correctAnswer;
    }
}

let questions = [

  new Question("What is the OpenAI Agents SDK used for?", {
    a: "Image generation",
    b: "Building AI agents that can use tools and perform actions",
    c: "Game development",
    d: "Speech synthesis"
  }, "b"),

  new Question("Which method runs the agent in a loop until the task is done?", {
    a: "agent.run_forever()",
    b: "agent.invoke()",
    c: "runner.run()",
    d: "agent.execute()"
  }, "c"),

  new Question("What does the `Agent` class define in the Agents SDK?", {
    a: "UI components",
    b: "LLM model settings",
    c: "Agent behavior and tool usage logic",
    d: "API routes"
  }, "c"),

  new Question("Which function is used to start an agent run with a user goal?", {
    a: "agent.execute()",
    b: "agent.start(goal)",
    c: "runner.run()",
    d: "agent.invoke(goal)"
  }, "d"),

  new Question("What is a 'tool' in the OpenAI Agents SDK?", {
    a: "A hardware device",
    b: "An API or function the agent can call",
    c: "A debugger",
    d: "A Next.js route"
  }, "b"),

  new Question("Which SDK class is responsible for the LLM completion layer?", {
    a: "Agent",
    b: "Tool",
    c: "AsyncOpenAI",
    d: "RunConfig"
  }, "c"),

  new Question("How do you register tools for your agent?", {
    a: "Via useEffect()",
    b: "Pass them to the agent constructor",
    c: "Calling agent.use(tool)",
    d: "Importing in page.tsx"
  }, "b"),

  new Question("Which method sends prompts to OpenAI using the SDK?", {
    a: "client.send()",
    b: "client.ask()",
    c: "client.complete()",
    d: "client.chat.completions.create()"
  }, "d"),

  new Question("Where do you typically set the OpenAI API key?", {
    a: ".env",
    b: "config.json",
    c: "settings.yaml",
    d: "global.js"
  }, "a"),

  new Question("Which file typically defines your agent logic?", {
    a: "agent.ts",
    b: "quiz.ts",
    c: "prompt.json",
    d: "main.py"
  }, "a"),

  new Question("What does `set_tracing_disabled(True)` do?", {
    a: "Disables LLM output",
    b: "Turns off tool invocation",
    c: "Stops debug tracing of the agent run",
    d: "Removes chat history"
  }, "c"),

  new Question("What format is tool metadata provided in?", {
    a: "CSV",
    b: "YAML",
    c: "JSON schema",
    d: "Markdown"
  }, "c"),

  new Question("Which method is used to define the agent's core logic?", {
    a: "run()",
    b: "handle()",
    c: "chat()",
    d: "invoke()"
  }, "b"),

  new Question("What type of function is typically used as a tool?", {
    a: "React component",
    b: "Express middleware",
    c: "Async function",
    d: "Shell command"
  }, "c"),

  new Question("Where is `RunConfig` used?", {
    a: "To configure tool behavior",
    b: "To define quiz UI",
    c: "To manage runtime agent settings",
    d: "To style buttons"
  }, "c"),

  new Question("How do you test tool calling works?", {
    a: "Write unit tests",
    b: "Run agent and inspect traces",
    c: "Use console.log",
    d: "Only in production"
  }, "b"),

  new Question("What is the default OpenAI model in SDK?", {
    a: "gpt-3.5",
    b: "gpt-4",
    c: "gpt-4o",
    d: "No default"
  }, "c"),

  new Question("Which OpenAI feature enables tool calling?", {
    a: "Functions",
    b: "Embeddings",
    c: "Image models",
    d: "Speech APIs"
  }, "a"),

  new Question("What is the first step to define a tool?", {
    a: "Export it",
    b: "Create a JSON file",
    c: "Define a function and add a schema",
    d: "Call agent.register()"
  }, "c"),

  new Question("What happens if an agent can’t decide on a tool?", {
    a: "It crashes",
    b: "It uses fallback tool",
    c: "It asks the user",
    d: "It sends an LLM-only reply"
  }, "d"),

  new Question("Which SDK version supports `oai.tool()`?", {
    a: "v0.0.1",
    b: "v1.0.0+",
    c: "v2.0.0",
    d: "v0.9.9"
  }, "b"),

  new Question("How do you switch models in the SDK?", {
    a: "Modify agent.ts",
    b: "Update .env",
    c: "Set model in RunConfig",
    d: "You can't"
  }, "c"),

  new Question("What does `.invoke()` return?", {
    a: "JSX output",
    b: "HTML page",
    c: "LLM response or tool result",
    d: "Boolean"
  }, "c"),

  new Question("How do you view step-by-step tool calls?", {
    a: "Check devtools",
    b: "Use agent.inspect()",
    c: "Enable tracing",
    d: "Enable logs"
  }, "c"),

  new Question("Can the SDK support streaming?", {
    a: "No",
    b: "Yes with SSE/WebSocket",
    c: "Only in API mode",
    d: "Only in tools"
  }, "b"),

  new Question("Which function disables logs/tracing?", {
    a: "set_logs_disabled()",
    b: "disableLogs()",
    c: "set_tracing_disabled()",
    d: "tracing.off()"
  }, "c"),

  new Question("How are user goals defined?", {
    a: "As intents",
    b: "As function parameters",
    c: "As strings",
    d: "As models"
  }, "c"),

  new Question("What happens if a tool throws an error?", {
    a: "Agent crashes",
    b: "LLM retries",
    c: "Error is logged and agent continues",
    d: "Nothing"
  }, "c"),

  new Question("Is the SDK available in Python?", {
    a: "Yes",
    b: "No",
    c: "Only for LLMs",
    d: "Only for LangChain"
  }, "b"),

  new Question("What library is used to define tools with decorators?", {
    a: "FastAPI",
    b: "LangGraph",
    c: "oai.tools",
    d: "Next.js"
  }, "c")

];
