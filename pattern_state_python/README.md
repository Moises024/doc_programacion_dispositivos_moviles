Este código nos ilustra la estructura del patrón de diseño State en el lenguaje de progrmación Python.

from __future__ import annotations
from abc import ABC, abstractmethod


class Context:
 
    _state = None

    def __init__(self, state: State) -> None:
        self.transition_to(state)

    def transition_to(self, state: State):

        print(f"Context: Transition to {type(state).__name__}")
        self._state = state
        self._state.context = self

    def request1(self):
        self._state.handle1()

    def request2(self):
        self._state.handle2()


class State(ABC):

    @property
    def context(self) -> Context:
        return self._context

    @context.setter
    def context(self, context: Context) -> None:
        self._context = context

    @abstractmethod
    def handle1(self) -> None:
        pass

    @abstractmethod
    def handle2(self) -> None:
        pass

class ConcreteStateA(State):
    def handle1(self) -> None:
        print("ConcreteStateA handles request1.")
        print("ConcreteStateA wants to change the state of the context.")
        self.context.transition_to(ConcreteStateB())

    def handle2(self) -> None:
        print("ConcreteStateA handles request2.")


class ConcreteStateB(State):
    def handle1(self) -> None:
        print("ConcreteStateB handles request1.")

    def handle2(self) -> None:
        print("ConcreteStateB handles request2.")
        print("ConcreteStateB wants to change the state of the context.")
        self.context.transition_to(ConcreteStateA())


if __name__ == "__main__":
    # The client code.

    context = Context(ConcreteStateA())
    context.request1()
    context.request2()

#
    
Esta es una implementación del patrón de diseño State en Python. El patrón State permite que un objeto cambie su comportamiento en función de su estado interno. El patrón de diseño State se compone de tres elementos principales: el contexto, el estado y las transiciones de estado. 

En esta implementación, la Contextclase representa el objeto cuyo estado puede cambiar. Tiene un _stateatributo que contiene el estado actual del objeto. Statees una clase base abstracta que define la interfaz para los estados concretos. Las clases ConcreteStateAy ConcreteStateBson las clases de estado concreto que implementan el comportamiento del objeto en diferentes estados.

Cuando Contextse crea el objeto, se inicializa con un estado inicial ( ConcreteStateAen este caso). El transition_to()método se utiliza para cambiar el estado del objeto. Cuando el Contextobjeto recibe una solicitud (ya sea request1()o request2()), delega el manejo de la solicitud al objeto de estado actual ( _state.handle1()o _state.handle2()).

En la ConcreteStateAclase, cuando handle1()se llama, cambia el estado del Contextobjeto a ConcreteStateBy luego maneja la solicitud. De manera similar, en ConcreteStateB, cuando handle2()se llama, cambia el estado del Contextobjeto de nuevo a ConcreteStateA.

#

## Comparación del patrón de diseño State con React Context y Redux

React Context y Redux son dos enfoques para manejar el estado en aplicaciones React. A continuación, se presenta una comparación entre ambos:

React Context:
- React Context es una característica de React que permite pasar datos a través de la jerarquía de componentes sin necesidad de pasar explícitamente las props en cada nivel.
- Context puede usarse para compartir datos que son necesarios en toda la aplicación, como el tema o el idioma.
- Context es una solución más simple y liviana que Redux y es ideal para aplicaciones pequeñas o medianas con pocos datos compartidos.

Redux:
- Redux es una biblioteca de gestión de estado que se enfoca en el almacenamiento del estado de la aplicación en un solo lugar.
- Redux utiliza un store centralizado para almacenar el estado de la aplicación.
- Los componentes envían acciones al store para actualizar el estado, y los cambios en el estado se propagan a los componentes que están suscritos al store.
- Redux es una solución más potente y escalable que Context y es adecuada para aplicaciones grandes y complejas que tienen muchos datos compartidos.

Por otro lado, es bueno saber que tanto React Context como Redux proporcionan un camino para compartir por fuera del árbol de componentes el estado. Sin embargo, para conseguir este efecto, internamente comparten diferentes cosas: Context comparte el value , mientras que. Redux comparte su store (que no su estado).




